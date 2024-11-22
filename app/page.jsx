"use client";

import Duas from "@/components/Duas";
import Categories from "@/components/Categories";
import { useEffect, useState } from "react";
import Settings from "@/components/Settings";
import { useFetcher } from "@/components/lib/useFetcher";
import { useRouter } from "next/navigation";

export default function Home({ searchParams }) {
  const [isCopied, setIsCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const catId = searchParams.cat;
  const subCatId = searchParams.subcat;
  const duaId = searchParams.dua;

  const { data: categories, isLoading: categoriesLoading } = useFetcher(
    `/categories?search=${searchQuery}`
  );
  const { data: duas, isLoading: duaLoading } = useFetcher(
    `/duas/filter?cat_id=${catId}&subcat_id=${subCatId ? subCatId : ""}`
  );
  const { data: subcategories } = useFetcher(
    catId && `/subcategories?cat_id=${catId}`
  );

  useEffect(() => {
    if (!catId) {
      router.push("?duas-importance&cat=1");
    }
  }, [router, catId]);

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
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <Categories
        subcategories={subcategories}
        categories={categories}
        duaList={duas}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        duaId={duaId}
        subCatId={subCatId}
        catId={catId}
        categoriesLoading={categoriesLoading}
      />

      <Duas
        duaId={duaId}
        duas={duas}
        isCopied={isCopied}
        handleCopy={handleCopy}
        duaLoading={duaLoading}
      />
      <Settings />
    </div>
  );
}
