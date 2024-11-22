import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "@/redux/features/categorySlice";
import { setSubcategoryId } from "@/redux/features/subcategorySlice";
import { setDuaId } from "@/redux/features/duaSlice";
import Skeleton from "react-loading-skeleton";

export default function Categories({
  categories,
  subcategories,
  duaList,
  searchQuery,
  handleSearch,
  duaId,
  subCatId,
  catId,
  categoriesLoading,
}) {
  const router = useRouter();

  // Handle category click
  const handleCategoryClick = (category) => {
    const name = category.cat_name_en
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace("'", "");
    router.push(`?${name}&cat=${category.cat_id}`);
  };

  // Handle subcategory click
  const handleSubCategoryClick = (subCategory, category) => {
    const name = category.cat_name_en
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace("'", "");
    router.push(
      `?${name}&cat=${category?.cat_id}&subcat=${subCategory?.subcat_id}`
    );
  };

  // Handle dua click
  const handleDuaClick = (subCategory, category, duaId) => {
    const name = category.cat_name_en
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace("'", "");
    router.push(
      `?${name}&cat=${category?.cat_id}&subcat=${subCategory.subcat_id}&dua=${duaId}`
    );
  };

  return (
    <div className="bg-white min-w-[22rem] col-lg:w-1/4 ml-3 pt-0 rounded-2xl overflow-auto scrollbar-thin h-[90vh] ">
      <p className="bg-[#1FA45B] text-white text-center font-normal px-3 py-4 text-m rounded-t-lg sticky top-0 w-76 z-10">
        Categories
      </p>

      <div className="w-full">
        <input
          type="text"
          placeholder={`Search Categories`}
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md py-2 px-3 pl-9 w-[90%] outline-[#1FA45B] mt-4 mx-4"
        />
        <IoSearchSharp className="text-2xl text-gray-400 relative bottom-[34px] left-6" />
      </div>

      <div className="px-3">
        {categoriesLoading ? (
          Array.from({ length: 10 }).map((item, i) => (
            <div className="mb-4" key={i}>
              <div className="flex items-center gap-2 p-3 bg-[#F9F9F9] rounded-[10px] mb-2 cursor-pointer">
                <Skeleton width={50} height={50} />
                <div>
                  <Skeleton height={20} width={150} />
                  <p className="text-sm font-normal text-[#7E7E7E]">
                    <Skeleton height={15} width={120} />
                  </p>
                </div>
                <div className="text-center text-gray-500">
                  <p className="text-base font-semibold text-[#393939]">
                    <Skeleton height={10} width={50} />
                  </p>
                  <p className="text-sm font-normal text-[#7E7E7E]">
                    <Skeleton height={10} width={50} />
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            {categories?.map((category) => (
              <div className="mb-4" key={category?.id}>
                <div
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center gap-2 p-3 bg-[#F9F9F9] rounded-[10px] mb-2 cursor-pointer"
                >
                  <Image
                    src="https://i.ibb.co/Km5k3WD/4b123749b99b0322305c72c5d565ddf3.png"
                    alt=""
                    width={50}
                    height={50}
                    className="p-2 rounded-lg bg-[#E8F0F5]"
                  />

                  <div>
                    <h3
                      className={`font-semibold text-base w-40 ${
                        catId == category?.cat_id
                          ? "text-[#1FA45B] font-semibold"
                          : "cursor-pointer"
                      }`}
                    >
                      {category.cat_name_en}
                    </h3>
                    <p className="text-sm font-normal text-[#7E7E7E]">
                      Subcategory: {category.no_of_subcat}
                    </p>
                  </div>
                  <div className="text-center text-gray-500">
                    <p className="text-base font-semibold text-[#393939]">
                      {category.no_of_dua}
                    </p>
                    <p className="text-sm font-normal text-[#7E7E7E]">Duas</p>
                  </div>
                </div>
                {catId == category?.cat_id && (
                  <div>
                    <ul className="green-list">
                      {console.log(subcategories)}
                      {subcategories &&
                        subcategories?.map((singleSubCat) => (
                          <li
                            className="text-[#373737] py-2 text-base green-dot cursor-pointer"
                            key={singleSubCat?.id}
                          >
                            <div
                              className={`flex items-center ${
                                subCatId == singleSubCat?.subcat_id
                                  ? "text-[#1FA45B] font-semibold"
                                  : "cursor-pointer"
                              }`}
                              onClick={() =>
                                handleSubCategoryClick(singleSubCat, category)
                              }
                            >
                              {singleSubCat.subcat_name_en}
                            </div>
                            {subCatId == singleSubCat?.subcat_id && (
                              <ul className="pt-2">
                                {duaList &&
                                  duaList?.map((dua) => (
                                    <li
                                      className={`cursor-pointer text-sm py-2 ${
                                        duaId == dua.dua_id
                                          ? "text-[#1FA45B] font-semibold"
                                          : "cursor-pointer"
                                      }`}
                                      key={dua.id}
                                      onClick={() =>
                                        handleDuaClick(
                                          singleSubCat,
                                          category,
                                          dua?.dua_id
                                        )
                                      }
                                    >
                                      <div className="flex items-center gap-2">
                                        <IoIosArrowForward className="text-[#1FA45B] w-[24px] shrink-0" />
                                        <span className="flex-1">
                                          {dua.dua_name_en}
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
