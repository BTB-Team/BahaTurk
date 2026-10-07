import React from 'react';
import projectImage from '../../assets/images/featured_project.jpg'

export default function FeaturedProject() {
    return (
        <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#0F99CC2B]">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Heading */}
                <h2 className="text-center font-bold text-[28px] sm:text-[32px] text-black mb-8 md:mb-10">
                    Featured Project
                </h2>

                {/* Main Card Container */}
                <div className="bg-white rounded-[28px] p-4 sm:p-5 lg:p-6 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

                    {/* Left Column Wrapper - ABSOLUTELY NO overflow-hidden HERE */}
                    <div className="relative w-full lg:w-[40%] shrink-0">

                        {/* Image Box - overflow-hidden belongs exclusively HERE */}
                        <div className="w-full h-[350px] sm:h-[508px] rounded-[24px] overflow-hidden bg-slate-200">
                            {projectImage ? (
                                <img
                                    src={projectImage}
                                    alt="Solh Residential Project"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                                    Image Placeholder
                                </div>
                            )}
                        </div>

                        {/* Button - Placed inside the relative wrapper, OUTSIDE the overflow-hidden box */}
                        <a
                            href="#explore"
                            className="absolute bottom-[-10px] left-0 z-20 inline-flex items-center gap-2 bg-white text-[#0F99CC] font-semibold text-[13px] sm:text-[16px] px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:gap-3"
                        >
                            <span>Explore Solh Residential Project</span>
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7663 13.1503C20.562 12.9311 20.4508 12.6412 20.4561 12.3417C20.4614 12.0421 20.5827 11.7563 20.7946 11.5445C21.0064 11.3326 21.2922 11.2113 21.5918 11.206C21.8913 11.2007 22.1812 11.3119 22.4004 11.5161L28.5671 17.6828C28.7836 17.8996 28.9052 18.1935 28.9052 18.4999C28.9052 18.8063 28.7836 19.1002 28.5671 19.317L22.4004 25.4836C22.2946 25.5972 22.1669 25.6884 22.0251 25.7515C21.8833 25.8147 21.7301 25.8487 21.5749 25.8515C21.4196 25.8542 21.2654 25.8256 21.1215 25.7675C20.9775 25.7093 20.8467 25.6228 20.7369 25.513C20.6271 25.4032 20.5406 25.2724 20.4824 25.1284C20.4242 24.9845 20.3957 24.8302 20.3984 24.675C20.4012 24.5197 20.4352 24.3666 20.4983 24.2248C20.5615 24.083 20.6527 23.9553 20.7663 23.8495L24.9596 19.6561H10.0208C9.71419 19.6561 9.42009 19.5343 9.20325 19.3175C8.98641 19.1006 8.86459 18.8065 8.86459 18.4999C8.86459 18.1932 8.98641 17.8991 9.20325 17.6823C9.42009 17.4655 9.71419 17.3436 10.0208 17.3436H24.9596L20.7663 13.1503Z" fill="#0F99CC" />
                            </svg>

                        </a>
                    </div>

                    {/* Right Column: Content Details */}
                    <div className="flex-1 flex flex-col justify-between space-y-6">
                        <div>
                            {/* Title */}
                            <h3 className="font-extrabold text-[28px] sm:text-[34px] md:text-[48px] tracking-[-0.01em] leading-[65px] text-black mb-2">
                                <span className="text-[#00A3E0]">Solh </span>
                                Residential Project
                            </h3>

                            {/* Subtitle */}
                            <h4 className="font-semibold text-[16px] sm:text-[18px] text-black mb-4">
                                Modern Engineering. Lasting Quality. A Better Future.
                            </h4>

                            {/* Paragraphs */}
                            <div className="space-y-3 text-[#000000] font-[400] text-[14px] sm:text-[16px] leading-relaxed">
                                <p>
                                    Located in Makroyan 5, Kabul, Solh Residential Project is Baha Turk's first and largest project in Afghanistan.
                                </p>
                                <p>
                                    Developed in cooperation with the Ministry of Urban Development and Housing, the project is envisioned as a modern, safe, and well-planned residential community designed to provide a higher standard of urban living for Afghan families.
                                </p>
                                <p>
                                    The overall development is planned to include 118 residential blocks, with 20 blocks in Phase One.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Meta Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">

                            {/* Stat 1: Location */}
                            <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:gap-4">
                                <div className="">
                                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="27.5" cy="27.5" r="27.5" fill="#0F99CC" fill-opacity="0.17" />
                                        <path d="M27.3333 28.5833C29.6805 28.5833 31.5833 26.6805 31.5833 24.3333C31.5833 21.986 29.6805 20.0833 27.3333 20.0833C24.9861 20.0833 23.0833 21.986 23.0833 24.3333C23.0833 26.6805 24.9861 28.5833 27.3333 28.5833Z" stroke="#0F99CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.3195 16.3195C21.4449 14.194 24.3275 13 27.3333 13C30.3391 13 33.2218 14.194 35.3472 16.3195C37.4726 18.4449 38.6667 21.3275 38.6667 24.3333C38.6667 27.0137 38.0972 28.7675 36.5417 30.7083L27.3333 41.3333L18.125 30.7083C16.5695 28.7675 16 27.0137 16 24.3333C16 21.3275 17.194 18.4449 19.3195 16.3195Z" stroke="#0F99CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </div>
                                <div className=''>
                                    <span className="text-[12px] sm:text-[14px] font-medium text-[#0F99CC] block">Location:</span>
                                    <span className="text-[14px] sm:text-[15px] font-semibold text-black block">Makroyan 5, Kabul</span>
                                </div>
                            </div>

                            {/* Stat 2: Phase One Area */}
                            <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:gap-4">
                                <div className="">
                                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="27.5" cy="27.5" r="27.5" fill="#0F99CC" fill-opacity="0.17" />
                                        <path d="M24.4063 15.7623V33.6854C24.4063 33.8094 24.3839 33.9324 24.3403 34.0484L30.5938 37.1752V18.8561L24.4063 15.7623ZM22.3438 15.6798L15.125 18.8891V37.2577L22.3994 34.0237C22.3621 33.9148 22.3433 33.8005 22.3438 33.6854V15.6798ZM22.9089 13.1718C23.06 13.0952 23.2277 13.0569 23.3972 13.0605C23.5666 13.0641 23.7326 13.1094 23.8803 13.1924L31.6518 17.0782L40.4876 13.1512C40.6446 13.0814 40.8165 13.052 40.9878 13.0656C41.1591 13.0792 41.3243 13.1353 41.4683 13.229C41.6124 13.3226 41.7307 13.4508 41.8127 13.6018C41.8946 13.7528 41.9375 13.9219 41.9375 14.0937V34.7187C41.9375 34.9183 41.8797 35.1135 41.7709 35.2808C41.6622 35.4481 41.5073 35.5803 41.3249 35.6613L32.0437 39.7863C31.9045 39.8481 31.7533 39.8783 31.601 39.8748C31.4488 39.8712 31.2992 39.8339 31.163 39.7657L23.3482 35.8593L14.5145 39.7863C14.3575 39.8561 14.1855 39.8855 14.0143 39.8719C13.843 39.8583 13.6778 39.8021 13.5338 39.7085C13.3897 39.6148 13.2713 39.4867 13.1894 39.3357C13.1075 39.1847 13.0646 39.0156 13.0646 38.8437V18.2187C13.0645 18.0192 13.1224 17.824 13.2311 17.6567C13.3399 17.4894 13.4948 17.3572 13.6771 17.2762L22.9089 13.1718ZM32.6563 18.8891V37.2577L39.875 34.0484V15.6819L32.6563 18.8891Z" fill="#0F99CC" />
                                    </svg>

                                </div>
                                <div>
                                    <span className="text-[12px] sm:text-[14px] font-medium text-[#0F99CC] block">Phase One Area:</span>
                                    <span className="text-[14px] sm:text-[15px] font-semibold text-black block">32 Jeribs</span>
                                </div>
                            </div>

                            {/* Stat 3: Phase One Blocks */}
                            <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:gap-4">
                                <div className="">
                                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="27.5" cy="27.5" r="27.5" fill="#0F99CC" fill-opacity="0.17" />
                                        <path d="M13.625 13.625C13.625 13.3183 13.7468 13.0242 13.9637 12.8074C14.1805 12.5906 14.4746 12.4688 14.7812 12.4688H40.2188C40.5254 12.4688 40.8195 12.5906 41.0363 12.8074C41.2532 13.0242 41.375 13.3183 41.375 13.625C41.375 13.9317 41.2532 14.2258 41.0363 14.4426C40.8195 14.6594 40.5254 14.7812 40.2188 14.7812H36.75C36.75 15.4241 36.2829 15.9375 35.6978 15.9375H35.0156V19.5103C35.9984 19.7763 36.7269 20.6897 36.7269 21.7534C36.7269 22.5582 36.3106 23.2704 35.6828 23.6844L36.7465 25.1875H41.9369C42.0921 25.1863 42.2416 25.2463 42.3528 25.3545C42.4641 25.4627 42.5282 25.6104 42.5312 25.7656C42.5313 25.8419 42.5161 25.9175 42.4868 25.9879C42.4575 26.0584 42.4145 26.1223 42.3603 26.1761C42.3061 26.2298 42.2418 26.2723 42.1712 26.3011C42.1005 26.3299 42.0248 26.3444 41.9485 26.3438H41.375V29.8125H41.9369C42.0921 29.8113 42.2416 29.8713 42.3528 29.9795C42.4641 30.0877 42.5282 30.2354 42.5312 30.3906C42.5282 30.5458 42.4641 30.6935 42.3528 30.8018C42.2416 30.91 42.0921 30.97 41.9369 30.9688H40.7599C40.7763 31.0745 40.7624 31.1828 40.7199 31.281C40.6773 31.3793 40.6078 31.4634 40.5194 31.5238C40.4153 31.5931 40.2997 31.6278 40.1841 31.6278C39.9991 31.6278 39.8256 31.5469 39.71 31.385L39.4152 30.9688H29.4136L29.1187 31.385C29.0031 31.5469 28.8297 31.6278 28.6447 31.6278C28.5291 31.6278 28.4134 31.5931 28.3094 31.5238C28.221 31.4634 28.1514 31.3793 28.1089 31.281C28.0663 31.1828 28.0524 31.0745 28.0689 30.9688H26.9381C26.7829 30.97 26.6334 30.91 26.5221 30.8018C26.4109 30.6935 26.3468 30.5458 26.3438 30.3906C26.3438 30.0738 26.612 29.8125 26.9381 29.8125H27.5V26.3438H26.9381C26.7829 26.345 26.6334 26.285 26.5221 26.1768C26.4109 26.0685 26.3468 25.9208 26.3438 25.7656C26.3438 25.4488 26.612 25.1875 26.9381 25.1875H32.0834L33.1471 23.6844C32.8265 23.4743 32.5632 23.1879 32.3807 22.8509C32.1983 22.5138 32.1024 22.1367 32.1019 21.7534C32.1019 21.4297 32.3678 21.1753 32.68 21.1753C33.0037 21.1753 33.2581 21.4297 33.2581 21.7534C33.2581 22.1697 33.4813 22.5374 33.8143 22.7409L33.9126 22.6021C33.938 22.5598 33.9687 22.521 34.0039 22.4865C34.0577 22.4325 34.1217 22.3897 34.1922 22.3605C34.2626 22.3313 34.3381 22.3164 34.4144 22.3165C34.5647 22.3154 34.715 22.3743 34.8248 22.4865C34.8605 22.5209 34.8916 22.5598 34.9173 22.6021L35.0145 22.7409C35.3475 22.5374 35.5706 22.1697 35.5706 21.7534C35.5706 21.1175 35.0734 20.6087 34.4375 20.5972C34.2409 20.5972 34.0559 20.4931 33.9519 20.3313C33.8836 20.2416 33.847 20.1318 33.8478 20.0191C33.8478 19.9728 33.8478 19.9381 33.8594 19.8919V15.9375H33.1772C32.5921 15.9375 32.125 15.4241 32.125 14.7812H25.1875V39.0625H26.0547C26.8525 39.0625 27.5 39.71 27.5 40.5078V41.375H41.3866C42.6584 41.375 43.6875 42.4098 43.6875 43.6875H11.3125C11.3125 42.4098 12.3416 41.375 13.6134 41.375H14.7812V40.5078C14.7812 39.71 15.4288 39.0625 16.2266 39.0625H17.0938V14.7812H14.7812C14.4746 14.7812 14.1805 14.6594 13.9637 14.4426C13.7468 14.2258 13.625 13.9317 13.625 13.625ZM18.25 17.0938V19.6271L23.3167 17.0938H18.25ZM18.9646 39.0625H24.0312V36.5292L18.9646 39.0625ZM23.3167 35.5938H18.25V38.1271L23.3167 35.5938ZM18.9646 20.5625H24.0312V18.0292L18.9646 20.5625ZM23.3167 21.7188H18.25V24.2521L23.3167 21.7188ZM18.9646 25.1875H24.0312V22.6542L18.9646 25.1875ZM23.3167 26.3438H18.25V28.8771L23.3167 26.3438ZM18.9646 29.8125H24.0312V27.2792L18.9646 29.8125ZM23.3167 30.9688H18.25V33.5021L23.3167 30.9688ZM18.9646 34.4375H24.0312V31.9042L18.9646 34.4375ZM34.3011 24.0636L33.5056 25.1875H35.3232L34.5277 24.0636C34.4522 24.0673 34.3766 24.0673 34.3011 24.0636ZM31.2648 26.3438H28.6562V29.8125H28.8089L31.2648 26.3438ZM30.2322 29.8125H38.5965L36.1418 26.3438H32.6869L30.2322 29.8125ZM37.5652 26.3438L40.0199 29.8125H40.2188V26.3438H37.5652Z" fill="#0F99CC" />
                                    </svg>

                                </div>
                                <div>
                                    <span className="text-[12px] sm:text-[14px] font-medium text-[#0F99CC] block">Phase One:</span>
                                    <span className="text-[14px] sm:text-[15px] font-semibold text-black block">20 Blocks</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};