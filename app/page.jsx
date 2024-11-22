"use client";

import Duas from "@/components/Duas";
import Categories from "@/components/Categories";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import Settings from "@/components/Settings";
import { useFetcher } from "@/components/lib/useFetcher";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home({ searchParams }) {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredSubCat, setFilteredSubCat] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [duaList, setDuaList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  // const catId = searchParams?.cat;
  // const subCatId = searchParams?.subcat;
  // const duaId = searchParams?.dua;

  const catId = useSelector((state) => state.category.cat_id);
  const subCatId = useSelector((state) => state.subcategory.subcat_id);
  const duaId = useSelector((state) => state.dua.dua_id);
  console.log("catId", catId);
  console.log("subCatId", subCatId);
  console.log("duaId", duaId);

  const { data: categories } = useFetcher("/categories");
  const { data: duas } = useFetcher(
    `/duas/filter?cat_id=${catId}&subcat_id=${subCatId ? subCatId : ""}`
  );
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
