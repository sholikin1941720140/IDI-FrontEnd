import React from "react";
import { Link } from "react-router-dom";
import UserDropdown from "../Dropdown/UserDropdown";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    return (
        <>
            <nav className=" md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31 31" fill="none">
                            <g clip-path="url(#clip0_475_1893)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.26562C0 6.88023 0.153097 6.51062 0.42561 6.23811C0.698124 5.9656 1.06773 5.8125 1.45312 5.8125H29.5469C29.9323 5.8125 30.3019 5.9656 30.5744 6.23811C30.8469 6.51062 31 6.88023 31 7.26562C31 7.65102 30.8469 8.02063 30.5744 8.29314C30.3019 8.56565 29.9323 8.71875 29.5469 8.71875H1.45312C1.06773 8.71875 0.698124 8.56565 0.42561 8.29314C0.153097 8.02063 0 7.65102 0 7.26562ZM0 15.5C0 15.1146 0.153097 14.745 0.42561 14.4725C0.698124 14.2 1.06773 14.0469 1.45312 14.0469H29.5469C29.9323 14.0469 30.3019 14.2 30.5744 14.4725C30.8469 14.745 31 15.1146 31 15.5C31 15.8854 30.8469 16.255 30.5744 16.5275C30.3019 16.8 29.9323 16.9531 29.5469 16.9531H1.45312C1.06773 16.9531 0.698124 16.8 0.42561 16.5275C0.153097 16.255 0 15.8854 0 15.5ZM1.45312 22.2812C1.06773 22.2812 0.698124 22.4343 0.42561 22.7069C0.153097 22.9794 0 23.349 0 23.7344C0 24.1198 0.153097 24.4894 0.42561 24.7619C0.698124 25.0344 1.06773 25.1875 1.45312 25.1875H29.5469C29.9323 25.1875 30.3019 25.0344 30.5744 24.7619C30.8469 24.4894 31 24.1198 31 23.7344C31 23.349 30.8469 22.9794 30.5744 22.7069C30.3019 22.4343 29.9323 22.2812 29.5469 22.2812H1.45312Z" fill="#777777" />
                            </g>
                            <defs>
                                <clipPath id="clip0_475_1893">
                                    <rect width="31" height="31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    {/* Brand */}
                    <a href="#" class="flex ml-2 md:mr-24">
                        <img src="/Asset/logoidi.png" class="h-8 mr-3" alt="FlowBite Logo" />
                        <span class="self-center text-sm font-bold text-primary-800 sm:text-sm whitespace-nowrap dark:text-white">IDI Malang Raya</span>
                    </a>
                    {/* <Link
                        className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        IDI Malang Raya
                    </Link> */}
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            {/* <NotificationDropdown /> */}
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        IDI Malang Raya
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 51" fill="none">
                                            <path d="M38.8877 12.1337C38.6911 11.9367 38.4576 11.7805 38.2006 11.6738C37.9435 11.5672 37.6679 11.5123 37.3896 11.5123C37.1113 11.5123 36.8357 11.5672 36.5787 11.6738C36.3216 11.7805 36.0881 11.9367 35.8915 12.1337L25.5002 22.5037L15.109 12.1125C14.9122 11.9158 14.6787 11.7597 14.4216 11.6532C14.1646 11.5467 13.8891 11.4919 13.6109 11.4919C13.3326 11.4919 13.0571 11.5467 12.8001 11.6532C12.543 11.7597 12.3095 11.9158 12.1127 12.1125C11.916 12.3092 11.7599 12.5428 11.6535 12.7998C11.547 13.0569 11.4922 13.3324 11.4922 13.6106C11.4922 13.8888 11.547 14.1643 11.6535 14.4214C11.7599 14.6784 11.916 14.912 12.1127 15.1087L22.504 25.5L12.1127 35.8912C11.916 36.088 11.7599 36.3215 11.6535 36.5786C11.547 36.8356 11.4922 37.1111 11.4922 37.3894C11.4922 37.6676 11.547 37.9431 11.6535 38.2001C11.7599 38.4572 11.916 38.6908 12.1127 38.8875C12.3095 39.0842 12.543 39.2403 12.8001 39.3468C13.0571 39.4532 13.3326 39.508 13.6109 39.508C13.8891 39.508 14.1646 39.4532 14.4216 39.3468C14.6787 39.2403 14.9122 39.0842 15.109 38.8875L25.5002 28.4962L35.8915 38.8875C36.0882 39.0842 36.3218 39.2403 36.5788 39.3468C36.8359 39.4532 37.1114 39.508 37.3896 39.508C37.6678 39.508 37.9433 39.4532 38.2004 39.3468C38.4574 39.2403 38.691 39.0842 38.8877 38.8875C39.0845 38.6908 39.2405 38.4572 39.347 38.2001C39.4535 37.9431 39.5083 37.6676 39.5083 37.3894C39.5083 37.1111 39.4535 36.8356 39.347 36.5786C39.2405 36.3215 39.0845 36.088 38.8877 35.8912L28.4965 25.5L38.8877 15.1087C39.6952 14.3012 39.6952 12.9412 38.8877 12.1337Z" fill="#343A40" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        {/* Navigation */}
                        

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none gap-2">
                            <li className="items-center flex">
                                <svg class="opacity-30" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M15.6667 9.33451V9.33333V4.66667C15.6667 4.46229 15.7304 4.31417 15.8562 4.18839C15.9819 4.06267 16.1293 3.99952 16.3322 4H16.3333H23.3333C23.5377 4 23.6858 4.06377 23.8116 4.18955L24.1641 3.83706L23.8116 4.18955C23.9373 4.31528 24.0005 4.46264 24 4.66549V4.66667V9.33333C24 9.53771 23.9362 9.68583 23.8105 9.81161L24.164 10.1652L23.8104 9.81161C23.6847 9.93734 23.5374 10.0005 23.3345 10H23.3333H16.3333C16.129 10 15.9808 9.93623 15.8551 9.81045C15.7293 9.68472 15.6662 9.53736 15.6667 9.33451ZM4 14.0012V14V4.66667C4 4.46229 4.06377 4.31417 4.18956 4.18839C4.31528 4.06267 4.46264 3.99952 4.66549 4V4H4.66667H11.6667C11.871 4 12.0192 4.06377 12.1449 4.18955C12.2707 4.31528 12.3338 4.46264 12.3333 4.66549V4.66667V14C12.3333 14.2044 12.2696 14.3525 12.1438 14.4783C12.0181 14.604 11.8707 14.6671 11.6678 14.6667H11.6667H4.66667C4.4623 14.6667 4.31417 14.6029 4.18839 14.4771C4.06267 14.3514 3.99952 14.204 4 14.0012ZM15.6667 23.3345V23.3333V14C15.6667 13.7956 15.7304 13.6475 15.8562 13.5217C15.9819 13.396 16.1293 13.3329 16.3322 13.3333H16.3333H23.3333C23.5377 13.3333 23.6858 13.3971 23.8116 13.5229C23.9373 13.6486 24.0005 13.796 24 13.9988V14V23.3333C24 23.5377 23.9362 23.6858 23.8105 23.8116L24.164 24.1652L23.8104 23.8116C23.6847 23.9373 23.5374 24.0005 23.3345 24H23.3333H16.3333C16.129 24 15.9808 23.9362 15.8551 23.8104C15.7293 23.6847 15.6662 23.5374 15.6667 23.3345ZM4.18839 23.8104L3.83532 24.1635L4.18839 23.8104C4.06267 23.6847 3.99952 23.5374 4 23.3345V23.3333V18.6667C4 18.4623 4.06377 18.3142 4.18956 18.1884C4.31528 18.0627 4.46264 17.9995 4.66549 18H4.66667H11.6667C11.871 18 12.0192 18.0638 12.1449 18.1896C12.2707 18.3153 12.3338 18.4626 12.3333 18.6655V18.6667V23.3333C12.3333 23.5377 12.2696 23.6858 12.1438 23.8116C12.0181 23.9373 11.8707 24.0005 11.6678 24H11.6667H4.66667C4.4623 24 4.31417 23.9362 4.18839 23.8104Z" fill="#495057" stroke="#495057" />
                                </svg>
                                <Link
                                    className={
                                        "text-sm py-3 font-semibold block " +
                                        (window.location.href.indexOf("/dashboard-user") !== -1
                                            ? "text-primary-700 hover:text-primary-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/dashboard-user"
                                >
                                    <i
                                        className={
                                            "mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/dashboard") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Dashboard
                                </Link>
                            </li>

                            <li className="items-center flex">
                                <svg class="opacity-30" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2478 9.05615C19.2478 12.1405 16.7238 14.6123 13.5742 14.6123C10.4258 14.6123 7.90069 12.1405 7.90069 9.05615C7.90069 5.97176 10.4258 3.5 13.5742 3.5C16.7238 3.5 19.2478 5.97176 19.2478 9.05615ZM5 20.9036C5 18.0484 8.94978 17.334 13.5742 17.334C18.2238 17.334 22.1484 18.073 22.1484 20.9304C22.1484 23.7856 18.1987 24.5 13.5742 24.5C8.92467 24.5 5 23.761 5 20.9036Z" fill="#495057" />
                                </svg>
                                <Link
                                    className={
                                        "text-sm py-3 font-semibold block " +
                                        (window.location.href.indexOf("/datapribadi") !== -1
                                            ? "text-primary-700 hover:text-primary-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/datapribadi"
                                >
                                    <i
                                        className={
                                            "fas fa-tools mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/settings") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Data Pribadi
                                </Link>
                            </li>

                            <li className="items-center flex">
                                <svg class="opacity-30" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7363 8.05589C19.7363 10.0748 19.2347 12.708 18.4629 12.3084C18.1473 13.339 17.4848 14.2286 16.5878 14.8261C15.6908 15.4237 14.6146 15.6924 13.542 15.5866C12.4694 15.4807 11.4665 15.007 10.7035 14.2456C9.94058 13.4843 9.46464 12.4824 9.35651 11.4101C8.59059 10.0701 7.58609 7.38505 10.1685 5.29205C10.2152 5.27689 10.2432 5.15089 10.2852 4.96539C10.445 4.26364 10.7991 2.7038 13.0327 3.00189C14.7553 3.23114 19.7363 4.12014 19.7363 8.05589ZM17.5162 9.32872C17.5162 9.32872 17.2525 10.0999 17.4998 10.9591C17.4966 11.8753 17.1343 12.7537 16.4907 13.4057C15.847 14.0577 14.9734 14.4313 14.0573 14.4464C13.1413 14.4614 12.2558 14.1167 11.5911 13.4862C10.9264 12.8556 10.5355 11.9896 10.5022 11.0741C10.5868 10.7532 10.5868 10.2101 10.5862 9.60639C10.5856 8.51731 10.5844 7.23222 11.0832 6.70839C14.5768 9.03531 17.5162 9.32872 17.5162 9.32872Z" fill="#495057" />
                                    <path d="M7.58333 21C7.58333 20.3688 7.91758 19.8158 8.41925 19.5078C8.40015 19.4352 8.38226 19.3623 8.36558 19.2891C8.27706 18.8906 8.20795 18.488 8.1585 18.0827C8.10838 17.6945 8.0782 17.3039 8.06808 16.9126C5.60583 17.8792 3.5 19.5638 3.5 21.3325V24.5H24.5V21.3325C24.5 19.6385 22.5692 18.0221 20.2428 17.0392V17.0555C20.2533 17.4113 20.2335 17.8197 20.195 18.2122C20.16 18.5762 20.1081 18.9391 20.0457 19.25H20.4167C20.525 19.2501 20.6311 19.2803 20.7232 19.3372C20.8153 19.3942 20.8898 19.4757 20.9382 19.5726L21.5215 20.7392C21.5623 20.8203 21.5833 20.9096 21.5833 21V22.1667C21.5833 22.3214 21.5219 22.4697 21.4125 22.5791C21.3031 22.6885 21.1547 22.75 21 22.75H19.8333V21.5833H20.4167V21.1377L20.0562 20.4167H18.4438L18.0833 21.1377V21.5833H18.6667V22.75H17.5C17.3453 22.75 17.1969 22.6885 17.0875 22.5791C16.9781 22.4697 16.9167 22.3214 16.9167 22.1667V21C16.9167 20.9096 16.9377 20.8203 16.9785 20.7392L17.5618 19.5726C17.6102 19.4757 17.6847 19.3942 17.7768 19.3372C17.8689 19.2803 17.975 19.2501 18.0833 19.25H18.8504C18.8632 19.1998 18.8761 19.1444 18.8889 19.0832C18.9472 18.8084 18.9992 18.4602 19.0342 18.1002C19.0692 17.7397 19.0855 17.3822 19.0767 17.0882C19.0746 16.9664 19.065 16.8448 19.0482 16.7242C19.0353 16.6413 19.0225 16.6034 19.0202 16.5952C19.0196 16.5935 19.019 16.5929 19.0202 16.5941L19.0219 16.5935C18.7124 16.4973 18.3993 16.4131 18.0833 16.3409C17.7899 16.2738 17.4866 16.6775 17.3542 16.9301H10.5C10.483 16.8976 10.4662 16.8649 10.4498 16.8321C10.3262 16.5859 10.1739 16.282 9.91667 16.3409C9.69208 16.3917 9.4675 16.45 9.24292 16.5142C9.23568 16.6165 9.23257 16.719 9.23358 16.8216C9.23592 17.1442 9.26683 17.5391 9.31642 17.9381C9.366 18.3359 9.43308 18.7232 9.50308 19.0289C9.52292 19.117 9.54275 19.1963 9.56142 19.2646C9.89492 19.3084 10.2087 19.4474 10.4652 19.665C10.7218 19.8826 10.9102 20.1695 11.0079 20.4913C11.1056 20.8132 11.1085 21.1564 11.0162 21.4799C10.9239 21.8033 10.7403 22.0933 10.4874 22.3151C10.2346 22.537 9.92317 22.6812 9.59045 22.7307C9.25773 22.7801 8.91782 22.7326 8.61141 22.5938C8.305 22.455 8.04506 22.2309 7.86273 21.9483C7.6804 21.6656 7.5834 21.3364 7.58333 21Z" fill="#495057" />
                                    <path d="M9.91667 21C9.91667 21.3349 9.64717 21.5921 9.33333 21.5921C9.0195 21.5921 8.75 21.3355 8.75 21C8.75 20.6652 9.0195 20.408 9.33333 20.408C9.64717 20.408 9.91667 20.6646 9.91667 21Z" fill="#495057" />
                                </svg>
                                <Link
                                    className={
                                        "text-sm py-3 font-semibold block " +
                                        (window.location.href.indexOf("/dataprofesi") !== -1
                                            ? "text-primary-700 hover:text-primary-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/dataprofesi"
                                >
                                    <i
                                        className={
                                            "fas fa-table mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/tables") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Data Profesi
                                </Link>
                            </li>

                            <li className="items-center flex">
                                <svg class="opacity-30" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86733 3.70071C3.5 5.06687 3.5 7.26721 3.5 11.6667V16.3334C3.5 20.7329 3.5 22.9332 4.86733 24.2994C6.2335 25.6667 8.43383 25.6667 12.8333 25.6667H15.1667C19.5662 25.6667 21.7665 25.6667 23.1327 24.2994C24.5 22.9332 24.5 20.7329 24.5 16.3334V11.6667C24.5 7.26721 24.5 5.06687 23.1327 3.70071C21.7665 2.33337 19.5662 2.33337 15.1667 2.33337H12.8333C8.43383 2.33337 6.2335 2.33337 4.86733 3.70071ZM9.33333 10.7917C9.10127 10.7917 8.87871 10.8839 8.71461 11.048C8.55052 11.2121 8.45833 11.4346 8.45833 11.6667C8.45833 11.8988 8.55052 12.1213 8.71461 12.2854C8.87871 12.4495 9.10127 12.5417 9.33333 12.5417H18.6667C18.8987 12.5417 19.1213 12.4495 19.2854 12.2854C19.4495 12.1213 19.5417 11.8988 19.5417 11.6667C19.5417 11.4346 19.4495 11.2121 19.2854 11.048C19.1213 10.8839 18.8987 10.7917 18.6667 10.7917H9.33333ZM9.33333 15.4584C9.10127 15.4584 8.87871 15.5506 8.71461 15.7147C8.55052 15.8788 8.45833 16.1013 8.45833 16.3334C8.45833 16.5654 8.55052 16.788 8.71461 16.9521C8.87871 17.1162 9.10127 17.2084 9.33333 17.2084H15.1667C15.3987 17.2084 15.6213 17.1162 15.7854 16.9521C15.9495 16.788 16.0417 16.5654 16.0417 16.3334C16.0417 16.1013 15.9495 15.8788 15.7854 15.7147C15.6213 15.5506 15.3987 15.4584 15.1667 15.4584H9.33333Z" fill="#495057" />
                                </svg>
                                <Link
                                    className={
                                        "text-sm py-3 font-semibold block " +
                                        (window.location.href.indexOf("/indexSTR") !== -1
                                            ? "text-primary-700 hover:text-primary-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/indexSTR"
                                >
                                    <i
                                        className={
                                            "fas fa-map-marked mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/maps") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Surat Tanda Registrasi
                                </Link>
                            </li>
                            <li className="items-center flex">
                                <svg class="opacity-30" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86733 3.70071C3.5 5.06687 3.5 7.26721 3.5 11.6667V16.3334C3.5 20.7329 3.5 22.9332 4.86733 24.2994C6.2335 25.6667 8.43383 25.6667 12.8333 25.6667H15.1667C19.5662 25.6667 21.7665 25.6667 23.1327 24.2994C24.5 22.9332 24.5 20.7329 24.5 16.3334V11.6667C24.5 7.26721 24.5 5.06687 23.1327 3.70071C21.7665 2.33337 19.5662 2.33337 15.1667 2.33337H12.8333C8.43383 2.33337 6.2335 2.33337 4.86733 3.70071ZM9.33333 10.7917C9.10127 10.7917 8.87871 10.8839 8.71461 11.048C8.55052 11.2121 8.45833 11.4346 8.45833 11.6667C8.45833 11.8988 8.55052 12.1213 8.71461 12.2854C8.87871 12.4495 9.10127 12.5417 9.33333 12.5417H18.6667C18.8987 12.5417 19.1213 12.4495 19.2854 12.2854C19.4495 12.1213 19.5417 11.8988 19.5417 11.6667C19.5417 11.4346 19.4495 11.2121 19.2854 11.048C19.1213 10.8839 18.8987 10.7917 18.6667 10.7917H9.33333ZM9.33333 15.4584C9.10127 15.4584 8.87871 15.5506 8.71461 15.7147C8.55052 15.8788 8.45833 16.1013 8.45833 16.3334C8.45833 16.5654 8.55052 16.788 8.71461 16.9521C8.87871 17.1162 9.10127 17.2084 9.33333 17.2084H15.1667C15.3987 17.2084 15.6213 17.1162 15.7854 16.9521C15.9495 16.788 16.0417 16.5654 16.0417 16.3334C16.0417 16.1013 15.9495 15.8788 15.7854 15.7147C15.6213 15.5506 15.3987 15.4584 15.1667 15.4584H9.33333Z" fill="#495057" />
                                </svg>
                                <Link
                                    className={
                                        "text-sm py-3 font-semibold block " +
                                        (window.location.href.indexOf("/indexSIP") !== -1
                                            ? "text-primary-700 hover:text-primary-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/indexSIP"
                                >
                                    <i
                                        className={
                                            "fas fa-map-marked mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/maps") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Surat Izin Praktik
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}