import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Categories({
  categories,
  getFilteredDua,
  filteredSubCat,
  isCategoryOpen,
  getFilteredSubCat,
  filteredDua,
  getFilteredDuaByName,
  duaList,
  searchQuery,
  handleSearch,
  filteredCategories,
}) {
  const [openSubCatId, setOpenSubCatId] = useState(null);
  const router = useRouter();
  const handleCategoryClick = (category) => {
    getFilteredDua(category.cat_id);
    const name = category.cat_name_en
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace("'", "");
    router.push(`?${name}&cat=${category.cat_id}`);
  };

  // Handle subcategory click
  const handleSubCategoryClick = (subCategory, category) => {
    getFilteredSubCat(subCategory.subcat_id); // Fetch data based on subcategory
    const name = category.cat_name_en
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace("'", "");
    router.push(`?${name}&cat=${category?.id}&subcat=${subCategory.subcat_id}`);
  };

  // Handle dua click
  const handleDuaClick = (subCategory, category, duaId) => {
    getFilteredDuaByName(duaId);
    const name = category.cat_name_en
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace("'", "");
    router.push(
      `?${name}&cat=${category?.id}&subcat=${subCategory.subcat_id}&dua=${duaId}`
    );
  };

  return (
    <div className="bg-white w-1/4 ml-3 pt-0 rounded-2xl overflow-auto scrollbar-thin h-[90vh] ">
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
        {filteredCategories?.map((category) => (
          <div className="mb-4" key={category.id}>
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
                <h3 className="font-semibold text-base w-40">
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
            {isCategoryOpen(category?.cat_id) && (
              <div>
                <ul className="green-list">
                  {filteredSubCat?.map((singleSubCat) => (
                    <li
                      className="text-[#373737] py-2 text-base green-dot cursor-pointer"
                      key={singleSubCat?.id}
                    >
                      <div
                        className={`flex items-center ${
                          openSubCatId === singleSubCat?.subcat_id
                            ? "text-[#1FA45B] font-semibold"
                            : "cursor-pointer"
                        }`}
                        onClick={() => {
                          if (openSubCatId === singleSubCat.subcat_id) {
                            setOpenSubCatId(null);
                          } else {
                            setOpenSubCatId(singleSubCat.subcat_id);
                          }
                          handleSubCategoryClick(singleSubCat, category);
                        }}
                      >
                        {singleSubCat.subcat_name_en}
                      </div>
                      {/* Dua name under sub categories */}
                      {openSubCatId === singleSubCat?.subcat_id && (
                        <ul className="pt-2">
                          {duaList?.map((dua) => (
                            <li
                              className={`cursor-pointer text-sm py-2 ${
                                filteredDua.length === 1 &&
                                filteredDua[0].id === dua.id
                                  ? "text-[#1FA45B] font-semibold"
                                  : "cursor-pointer"
                              }`}
                              key={dua.id}
                              onClick={() =>
                                handleDuaClick(singleSubCat, category, dua?.id)
                              }
                            >
                              <div className="flex items-center">
                                <IoIosArrowForward className="text-[#1FA45B] text-lg mr-2" />
                                {dua.dua_name_en}
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
      </div>
    </div>
  );
}
