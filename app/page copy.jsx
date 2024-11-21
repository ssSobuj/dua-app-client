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
  const [filteredSubCat, setFilteredSubCat] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [openDua, setOpenDua] = useState(null);
  const [filteredDua, setFilteredDua] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [duaList, setDuaList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const router = useRouter();
  const catId = searchParams?.cat;
  const subCatId = searchParams?.subcat || 1;

  useEffect(() => {
    router.push("?duas-importance&cat=1");
  }, [router]);

  const { data: categories } = useFetcher("/categories");
  const { data: duas } = useFetcher(`/duas/${subCatId}`);
  const { data: subCat } = useFetcher(`/categories/${catId}/subcategories`);

  console.log(subCat);
  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const isCategoryOpen = (categoryId) => {
    return openCategory === categoryId;
  };

  // Get Functions
  const getFilteredDua = (cat_id) => {
    flushSync(() => setFilteredDua([]));

    flushSync(() =>
      setFilteredDua(() => {
        return duas.filter((dua) => dua.cat_id === cat_id);
      })
    );

    if (openCategory === cat_id) {
      setOpenCategory(null);
    } else {
      setOpenCategory(cat_id);
    }
    flushSync(() =>
      setFilteredSubCat(() => {
        return subCat.filter((sc) => sc.cat_id === cat_id);
      })
    );
  };

  const getFilteredSubCat = (SubCatId) => {
    flushSync(() => setFilteredDua([]));

    flushSync(() =>
      setDuaList(() => {
        return duas.filter((dua) => dua.subcat_id === SubCatId);
      })
    );
    setOpenDua(!openDua);
  };

  const getFilteredDuaByName = (duaId) => {
    flushSync(() => setFilteredDua([]));
    flushSync(() =>
      setFilteredDua(() => {
        return duas.filter((dua) => dua.id === duaId);
      })
    );
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
          filteredSubCat={filteredSubCat}
          getFilteredDua={getFilteredDua}
          categories={categories}
          isCategoryOpen={isCategoryOpen}
          getFilteredSubCat={getFilteredSubCat}
          filteredDua={filteredDua}
          openDua={openDua}
          duaList={duaList}
          getFilteredDuaByName={getFilteredDuaByName}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          filteredCategories={filteredCategories}
        />

        <Duas
          duas={duas}
          filteredSubCat={filteredSubCat}
          filteredDua={filteredDua}
          isCopied={isCopied}
          handleCopy={handleCopy}
          openCategory={openCategory}
        />
        <Settings />
      </div>
    </>
  );
}
