import React from "react";
import { Link } from "react-router-dom";
import AdminNav from '../components/adminNav';
import SidebarAdmin from '../components/AdminSidebar.js';


export default function indexMasterdataanggota () {
    return (
        <>
        <AdminNav />
        <SidebarAdmin />
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 md:mt-14">
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full overflow-auto h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <p class="text-sm justify-center font-semibold text-gray-800 md:text-lg">
                                    Master Data Anggota
                                </p>
                            </div>

                            <div class="justify-start mt-4">
                                <div className="justify-start py-2">
                                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                        <ul class="flex flex-wrap -mb-px">
                                            <Link to="/master-data-anggota">
                                                <li class="mr-2">
                                                    <a href="#" class="inline-block p-4 border-b-2 text-primary-700 border-primary-700 rounded-t-lg hover:text-primary-800 hover:border-primary-800  dark:hover:text-gray-300">Semua Anggota</a>
                                                </li>
                                            </Link>
                                            
                                            <Link to="/meminta-persetujuan">
                                                <li class="mr-2">
                                                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Meminta Persetujuan</a>
                                                </li>
                                            </Link>  
                                        </ul>
                                    </div>
                                </div>
                            
                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    <span class="sr-only">Image</span>
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nama Lengkap
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    NIK
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    NPA IDI
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    NO TELEPON
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-blue-600 hover:bg-red-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M1.18213 12C2.12213 6.88 6.60813 3 12.0001 3C17.3921 3 21.8781 6.88 22.8191 12C21.8791 17.12 17.3921 21 12.0001 21C6.60813 21 2.12213 17.12 1.18213 12ZM12.0001 17C13.3262 17 14.598 16.4732 15.5357 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5357 8.46447C14.598 7.52678 13.3262 7 12.0001 7C10.674 7 9.40228 7.52678 8.46459 8.46447C7.52691 9.40215 7.00013 10.6739 7.00013 12C7.00013 13.3261 7.52691 14.5979 8.46459 15.5355C9.40228 16.4732 10.674 17 12.0001 17ZM12.0001 15C11.2045 15 10.4414 14.6839 9.87881 14.1213C9.3162 13.5587 9.00013 12.7956 9.00013 12C9.00013 11.2044 9.3162 10.4413 9.87881 9.87868C10.4414 9.31607 11.2045 9 12.0001 9C12.7958 9 13.5588 9.31607 14.1214 9.87868C14.6841 10.4413 15.0001 11.2044 15.0001 12C15.0001 12.7956 14.6841 13.5587 14.1214 14.1213C13.5588 14.6839 12.7958 15 12.0001 15Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 13" fill="none">
                                                                <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 13" fill="none">
                                                                <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-blue-600 hover:bg-red-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M1.18213 12C2.12213 6.88 6.60813 3 12.0001 3C17.3921 3 21.8781 6.88 22.8191 12C21.8791 17.12 17.3921 21 12.0001 21C6.60813 21 2.12213 17.12 1.18213 12ZM12.0001 17C13.3262 17 14.598 16.4732 15.5357 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5357 8.46447C14.598 7.52678 13.3262 7 12.0001 7C10.674 7 9.40228 7.52678 8.46459 8.46447C7.52691 9.40215 7.00013 10.6739 7.00013 12C7.00013 13.3261 7.52691 14.5979 8.46459 15.5355C9.40228 16.4732 10.674 17 12.0001 17ZM12.0001 15C11.2045 15 10.4414 14.6839 9.87881 14.1213C9.3162 13.5587 9.00013 12.7956 9.00013 12C9.00013 11.2044 9.3162 10.4413 9.87881 9.87868C10.4414 9.31607 11.2045 9 12.0001 9C12.7958 9 13.5588 9.31607 14.1214 9.87868C14.6841 10.4413 15.0001 11.2044 15.0001 12C15.0001 12.7956 14.6841 13.5587 14.1214 14.1213C13.5588 14.6839 12.7958 15 12.0001 15Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 13" fill="none">
                                                                <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 13" fill="none">
                                                                <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-blue-600 hover:bg-red-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M1.18213 12C2.12213 6.88 6.60813 3 12.0001 3C17.3921 3 21.8781 6.88 22.8191 12C21.8791 17.12 17.3921 21 12.0001 21C6.60813 21 2.12213 17.12 1.18213 12ZM12.0001 17C13.3262 17 14.598 16.4732 15.5357 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5357 8.46447C14.598 7.52678 13.3262 7 12.0001 7C10.674 7 9.40228 7.52678 8.46459 8.46447C7.52691 9.40215 7.00013 10.6739 7.00013 12C7.00013 13.3261 7.52691 14.5979 8.46459 15.5355C9.40228 16.4732 10.674 17 12.0001 17ZM12.0001 15C11.2045 15 10.4414 14.6839 9.87881 14.1213C9.3162 13.5587 9.00013 12.7956 9.00013 12C9.00013 11.2044 9.3162 10.4413 9.87881 9.87868C10.4414 9.31607 11.2045 9 12.0001 9C12.7958 9 13.5588 9.31607 14.1214 9.87868C14.6841 10.4413 15.0001 11.2044 15.0001 12C15.0001 12.7956 14.6841 13.5587 14.1214 14.1213C13.5588 14.6839 12.7958 15 12.0001 15Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 13" fill="none">
                                                                <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 13" fill="none">
                                                                <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-blue-600 hover:bg-red-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M1.18213 12C2.12213 6.88 6.60813 3 12.0001 3C17.3921 3 21.8781 6.88 22.8191 12C21.8791 17.12 17.3921 21 12.0001 21C6.60813 21 2.12213 17.12 1.18213 12ZM12.0001 17C13.3262 17 14.598 16.4732 15.5357 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5357 8.46447C14.598 7.52678 13.3262 7 12.0001 7C10.674 7 9.40228 7.52678 8.46459 8.46447C7.52691 9.40215 7.00013 10.6739 7.00013 12C7.00013 13.3261 7.52691 14.5979 8.46459 15.5355C9.40228 16.4732 10.674 17 12.0001 17ZM12.0001 15C11.2045 15 10.4414 14.6839 9.87881 14.1213C9.3162 13.5587 9.00013 12.7956 9.00013 12C9.00013 11.2044 9.3162 10.4413 9.87881 9.87868C10.4414 9.31607 11.2045 9 12.0001 9C12.7958 9 13.5588 9.31607 14.1214 9.87868C14.6841 10.4413 15.0001 11.2044 15.0001 12C15.0001 12.7956 14.6841 13.5587 14.1214 14.1213C13.5588 14.6839 12.7958 15 12.0001 15Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 13" fill="none">
                                                                <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 13" fill="none">
                                                                <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-blue-600 hover:bg-red-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M1.18213 12C2.12213 6.88 6.60813 3 12.0001 3C17.3921 3 21.8781 6.88 22.8191 12C21.8791 17.12 17.3921 21 12.0001 21C6.60813 21 2.12213 17.12 1.18213 12ZM12.0001 17C13.3262 17 14.598 16.4732 15.5357 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5357 8.46447C14.598 7.52678 13.3262 7 12.0001 7C10.674 7 9.40228 7.52678 8.46459 8.46447C7.52691 9.40215 7.00013 10.6739 7.00013 12C7.00013 13.3261 7.52691 14.5979 8.46459 15.5355C9.40228 16.4732 10.674 17 12.0001 17ZM12.0001 15C11.2045 15 10.4414 14.6839 9.87881 14.1213C9.3162 13.5587 9.00013 12.7956 9.00013 12C9.00013 11.2044 9.3162 10.4413 9.87881 9.87868C10.4414 9.31607 11.2045 9 12.0001 9C12.7958 9 13.5588 9.31607 14.1214 9.87868C14.6841 10.4413 15.0001 11.2044 15.0001 12C15.0001 12.7956 14.6841 13.5587 14.1214 14.1213C13.5588 14.6839 12.7958 15 12.0001 15Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 13" fill="none">
                                                                <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 13" fill="none">
                                                                <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                <nav aria-label="Page navigation example" class="justify-end">
                                    <ul class="flex items-center -space-x-px h-8 text-sm mt-4">
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Previous</span>
                                                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                                        </li>
                                        
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Next</span>
                                                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Product name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    Color
                                                    <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                    </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    Category
                                                    <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                    </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    Price
                                                    <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                    </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td class="px-6 py-4">
                                                Silver
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td class="px-6 py-4">
                                                $2999
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td class="px-6 py-4">
                                                White
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td class="px-6 py-4">
                                                $1999
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td class="px-6 py-4">
                                                Black
                                            </td>
                                            <td class="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td class="px-6 py-4">
                                                $99
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}