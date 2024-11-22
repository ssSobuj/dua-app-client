"use client";

import { IoBulbOutline, IoShareSocialOutline } from "react-icons/io5";
import { LuBookmark, LuCopy } from "react-icons/lu";
import { BsExclamationOctagon } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import Audio from "./Audio";
import { useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

export default function Duas({ duas, duaId, duaLoading }) {
  const duaRefs = useRef({});

  useEffect(() => {
    if (duaId && duaRefs.current[duaId]) {
      duaRefs.current[duaId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [duaId]);

  const handleCopy = (dua) => {
    const textToCopy = `
    ${dua.id}. ${dua.dua_name_en}
    ${dua.top_en ? dua.top_en : ""}
    ${dua.dua_arabic ? `Dua (Arabic): ${dua.dua_arabic}` : ""}
    ${dua.translation_en ? `Transliteration: ${dua.translation_en}` : ""}
    ${dua.translation_en ? `Translation: ${dua.translation_en}` : ""}
    ${dua.refference_en ? `Reference: ${dua.refference_en}` : ""}
  `.trim();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Dua copied successfully!", {
            style: {
              background: "black",
              color: "white",
            },
            iconTheme: {
              primary: "black", // Icon color
              secondary: "white", // Icon background color
            },
            icon: (
              <FaCheckCircle
                style={{
                  color: "black",
                  background: "white",
                  borderRadius: "50%",
                }}
              />
            ),
          });
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
          toast.error("Failed to copy dua. Please try again.");
        });
    }
  };

  const skeletonArray = [{ id: 1 }, { id: 2 }];

  return (
    <div className="mx-2 w-3/4 relative lg:right-0 right-14 m-3 lg:m-0 lg:top-0 lg:overflow-auto scrollbar-thin lg:h-[52.8rem] text-[#393939]">
      <ul>
        {duaLoading ? (
          skeletonArray.map((_, index) => (
            <li
              className="mb-4 bg-white p-5 rounded-2xl mr-0 width"
              key={index}
            >
              <Skeleton className="bg-gray-500" height={30} width={350} />
              <p className="mt-7">
                <Skeleton className="bg-gray-500" count={2} />
              </p>
              <p className="text-2xl text-right leading-loose font-me-quran mt-4 mb-4 dua-arabic p-3">
                <Skeleton className="bg-gray-500" height={20} />
              </p>
              <p className="mb-3">
                <em>
                  <Skeleton className="bg-gray-500" height={15} width={150} />
                </em>
              </p>
              <p className="mt-3">
                <span className="text-[#1FA45B] font-semibold">
                  <Skeleton className="bg-gray-500" height={15} width={100} />
                </span>
                <br />
                <Skeleton className="bg-gray-500" height={10} width={300} />
              </p>
              <div className="flex justify-end text-xl text-gray-400 gap-4 mt-3">
                <Skeleton
                  className="bg-gray-500"
                  circle
                  height={30}
                  width={30}
                />
                <Skeleton
                  className="bg-gray-500"
                  circle
                  height={30}
                  width={30}
                />
                <Skeleton
                  className="bg-gray-500"
                  circle
                  height={30}
                  width={30}
                />
                <Skeleton
                  className="bg-gray-500"
                  circle
                  height={30}
                  width={30}
                />
                <Skeleton
                  className="bg-gray-500"
                  circle
                  height={30}
                  width={30}
                />
              </div>
            </li>
          ))
        ) : (
          <>
            {duas?.map((dua) => (
              <li
                className="mb-4 bg-white p-5 rounded-2xl mr-0 width"
                key={dua.id}
                ref={(el) => (duaRefs.current[dua?.dua_id] = el)}
              >
                {/* Dua Section */}
                <div className="flex text-[#1FA45B] font-semibold text-lg items-center gap-3">
                  <img
                    src="https://i.ibb.co/8sQ2QSk/allah-1-Traced.png"
                    alt=""
                  />
                  <p>
                    {dua.id}. {dua.dua_name_en}
                  </p>
                </div>
                <p className="mt-7">{dua.top_en}</p>
                {dua.dua_arabic && (
                  <p className="text-2xl text-right leading-loose font-me-quran mt-4 mb-4 dua-arabic p-3">
                    {dua.dua_arabic}
                  </p>
                )}
                {dua.translation_en && (
                  <p className="mb-3">
                    <em>
                      <strong>Transliteration:</strong> {dua.translation_en}
                    </em>
                  </p>
                )}
                {dua.translation_en && (
                  <p className="mb-4">
                    <strong>Translation:</strong> {dua.translation_en}
                  </p>
                )}
                <p className="mt-3">
                  <span className="text-[#1FA45B] font-semibold">
                    Reference:{" "}
                  </span>
                  <br />
                  {dua.refference_en}
                </p>

                {/* Dua Audio */}
                {dua.audio && <Audio audio={dua.audio} />}

                {/* Icons */}
                <div className="flex justify-end text-xl text-gray-400 gap-4 mt-3">
                  <div
                    onClick={() => handleCopy(dua)}
                    className="cursor-pointer"
                    title="copy"
                  >
                    <LuCopy />
                  </div>
                  <LuBookmark
                    className="cursor-pointer"
                    onClick={() =>
                      toast.success("Coming Soon Inshaallah", {
                        style: {
                          background: "black",
                          color: "white",
                        },
                        iconTheme: {
                          primary: "black", // Icon color
                          secondary: "white", // Icon background color
                        },
                        icon: (
                          <FaCheckCircle
                            style={{
                              color: "black",
                              background: "white",
                              borderRadius: "50%",
                            }}
                          />
                        ),
                      })
                    }
                  />
                  <IoBulbOutline
                    className="cursor-pointer"
                    onClick={() =>
                      toast.success("Coming Soon Inshaallah", {
                        style: {
                          background: "black",
                          color: "white",
                        },
                        iconTheme: {
                          primary: "black", // Icon color
                          secondary: "white", // Icon background color
                        },
                        icon: (
                          <FaCheckCircle
                            style={{
                              color: "black",
                              background: "white",
                              borderRadius: "50%",
                            }}
                          />
                        ),
                      })
                    }
                  />
                  <IoShareSocialOutline
                    className="cursor-pointer"
                    onClick={() =>
                      toast.success("Coming Soon Inshaallah", {
                        style: {
                          background: "black",
                          color: "white",
                        },
                        iconTheme: {
                          primary: "black", // Icon color
                          secondary: "white", // Icon background color
                        },
                        icon: (
                          <FaCheckCircle
                            style={{
                              color: "black",
                              background: "white",
                              borderRadius: "50%",
                            }}
                          />
                        ),
                      })
                    }
                  />
                  <BsExclamationOctagon
                    className="cursor-pointer"
                    onClick={() =>
                      toast.success("Coming Soon Inshaallah", {
                        style: {
                          background: "black",
                          color: "white",
                        },
                        iconTheme: {
                          primary: "black", // Icon color
                          secondary: "white", // Icon background color
                        },
                        icon: (
                          <FaCheckCircle
                            style={{
                              color: "black",
                              background: "white",
                              borderRadius: "50%",
                            }}
                          />
                        ),
                      })
                    }
                  />
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
