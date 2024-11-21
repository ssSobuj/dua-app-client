"use client";

import Duas from "@/components/Duas";
import Categories from "@/components/Categories";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
// import duas from "@/components/api/dua.json";
// import categories from "@/components/api/category.json";
// import subCat from "@/components/api/sub-category.json";
import Settings from "@/components/Settings";
import { useFetcher } from "@/components/lib/useFetcher";
import { useRouter } from "next/navigation";

export default function Home({ searchParams }) {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredSubCat, setFilteredSubCat] = useState([]);
  const [duas, setDuas] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [duaList, setDuaList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const catId = searchParams?.cat;
  const subCatId = searchParams?.subcat;
  const duaId = searchParams?.dua;

  // // Category routes
  // router.get("/categories", categoryController.getCategories);
  // router.get("/categories/:id", categoryController.getCategory);

  // // Subcategory routes
  // router.get(
  //   "/categories/:catId/subcategories",
  //   subCategoryController.getSubcategoriesByCategory
  // );
  // router.get("/subcategories", subCategoryController.getSubcategories);

  // // Dua routes
  // router.get("/duas", duaController.getAllDua);
  // router.get("/duas/:duaId", duaController.getDuaById);
  // router.get(
  //   "/subcategories/:subcatId/duas",
  //   duaController.getDuasBySubcategoryId
  // );
  // router.get("/categories/:catId/duas", duaController.getDuasByCategoryId);

  const { data: categories } = useFetcher("/categories");
  const { data: duasBySubCat } = useFetcher(
    subCatId && `/subcategories/${subCatId}/duas`
  );
  const { data: duasbyCat } = useFetcher(catId && `/categories/${catId}/duas`);
  const { data: subCat } = useFetcher(
    subCatId && `/categories/${subCatId}/subcategories`
  );

  useEffect(() => {
    if (!catId) {
      router.push("?duas-importance&cat=1");
    }
  }, [router]);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  useEffect(() => {
    setFilteredSubCat(subCat);
  }, [subCat]);

  useEffect(() => {
    setDuas(duasbyCat);
  }, [duasbyCat, catId]);

  useEffect(() => {
    setDuas(duasBySubCat);
  }, [duasBySubCat, subCatId]);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Search Query

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = categories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-4">
        <Categories
          activeCategory={catId}
          activeDua={duaId}
          activeSubCategory={subCatId}
          filteredSubCat={filteredSubCat}
          categories={categories}
          duaList={duas}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          filteredCategories={filteredCategories}
        />

        <Duas
          duas={duas}
          isCopied={isCopied}
          handleCopy={handleCopy}
          openCategory={openCategory}
        />
        <Settings />
      </div>
    </>
  );
}
