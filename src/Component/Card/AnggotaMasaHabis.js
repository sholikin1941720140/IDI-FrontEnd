import React from "react";

export default function AnggotaMasaHabis () {
    return (
        <>
            <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="section-icon flex items-start justify-start mb-4">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3708 4.67507C12.3708 6.21329 11.9885 8.21951 11.4005 7.91507C11.1601 8.70027 10.6553 9.37806 9.97188 9.83334C9.28845 10.2886 8.46851 10.4933 7.65129 10.4127C6.83406 10.3321 6.06992 9.97112 5.48863 9.39108C4.90733 8.81103 4.5447 8.04768 4.46232 7.23062C3.87877 6.20974 3.11344 4.16396 5.08099 2.56929C5.11655 2.55773 5.13788 2.46174 5.16988 2.3204C5.29166 1.78574 5.56144 0.597291 7.26321 0.824402C8.57566 0.999068 12.3708 1.6764 12.3708 4.67507ZM10.6792 5.64485C10.6792 5.64485 10.4783 6.2324 10.6668 6.88707C10.6643 7.58511 10.3883 8.25435 9.89787 8.75112C9.40748 9.24789 8.74185 9.53256 8.04391 9.54402C7.34596 9.55549 6.67134 9.29282 6.1649 8.81243C5.65846 8.33203 5.36058 7.6722 5.33521 6.97462C5.39966 6.73018 5.39966 6.3164 5.39921 5.8564C5.39877 5.02662 5.39788 4.04751 5.77788 3.6484C8.43966 5.42129 10.6792 5.64485 10.6792 5.64485Z" fill="#005FDB" />
                            <path d="M3.11111 14.5374C3.11111 14.0565 3.36578 13.6351 3.748 13.4005C3.73344 13.3452 3.71981 13.2896 3.70711 13.2338C3.63967 12.9302 3.58701 12.6234 3.54933 12.3147C3.51115 12.0189 3.48815 11.7213 3.48044 11.4231C1.60444 12.1596 0 13.4431 0 14.7907V17.204H16V14.7907C16 13.5 14.5289 12.2685 12.7564 11.5196V11.532C12.7644 11.8031 12.7493 12.1143 12.72 12.4134C12.6933 12.6907 12.6538 12.9671 12.6062 13.204H12.8889C12.9714 13.2041 13.0523 13.2271 13.1225 13.2705C13.1926 13.3139 13.2493 13.376 13.2862 13.4498L13.7307 14.3387C13.7618 14.4005 13.7778 14.4685 13.7778 14.5374V15.4263C13.7778 15.5441 13.731 15.6572 13.6476 15.7405C13.5643 15.8239 13.4512 15.8707 13.3333 15.8707H12.4444V14.9818H12.8889V14.6423L12.6142 14.0929H11.3858L11.1111 14.6423V14.9818H11.5556V15.8707H10.6667C10.5488 15.8707 10.4357 15.8239 10.3524 15.7405C10.269 15.6572 10.2222 15.5441 10.2222 15.4263V14.5374C10.2222 14.4685 10.2382 14.4005 10.2693 14.3387L10.7138 13.4498C10.7507 13.376 10.8074 13.3139 10.8775 13.2705C10.9477 13.2271 11.0286 13.2041 11.1111 13.204H11.6956C11.7053 13.1658 11.7151 13.1236 11.7249 13.0769C11.7693 12.8676 11.8089 12.6023 11.8356 12.328C11.8622 12.0534 11.8747 11.7809 11.868 11.5569C11.8663 11.4641 11.8591 11.3715 11.8462 11.2796C11.8364 11.2165 11.8267 11.1876 11.8249 11.1814C11.8244 11.18 11.824 11.1796 11.8249 11.1805L11.8262 11.18C11.5904 11.1068 11.3519 11.0426 11.1111 10.9876C10.8876 10.9365 10.6564 11.244 10.5556 11.4365H5.33333C5.32036 11.4117 5.30761 11.3868 5.29511 11.3618C5.20089 11.1743 5.08489 10.9427 4.88889 10.9876C4.71778 11.0263 4.54667 11.0707 4.37556 11.1196C4.37004 11.1975 4.36767 11.2757 4.36844 11.3538C4.37022 11.5996 4.39378 11.9005 4.43156 12.2045C4.46933 12.5076 4.52044 12.8027 4.57378 13.0356C4.58889 13.1027 4.604 13.1631 4.61822 13.2151C4.87232 13.2485 5.1114 13.3545 5.30685 13.5202C5.50231 13.686 5.64585 13.9046 5.72029 14.1498C5.79473 14.395 5.79692 14.6565 5.7266 14.903C5.65627 15.1494 5.51642 15.3704 5.32377 15.5394C5.13112 15.7084 4.89384 15.8183 4.64034 15.856C4.38684 15.8936 4.12786 15.8574 3.89441 15.7517C3.66095 15.646 3.46291 15.4752 3.32399 15.2598C3.18507 15.0445 3.11116 14.7936 3.11111 14.5374Z" fill="#005FDB" />
                            <path d="M4.88889 14.5373C4.88889 14.7924 4.68356 14.9884 4.44444 14.9884C4.20533 14.9884 4 14.7928 4 14.5373C4 14.2822 4.20533 14.0862 4.44444 14.0862C4.68356 14.0862 4.88889 14.2817 4.88889 14.5373Z" fill="#005FDB" />
                        </svg>
                    </div>

                    <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                        Anggota habis masa STR dan SIP
                    </p>
                    <a href="#" class="inline-flex items-center text-blue-600 hover:underline ml-12">
                        Lihat Semua Data
                        <div class="arrowRight">
                            {/* ctaicon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                <path d="M10.3438 4.32861L0.96875 4.32861" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.56274 0.56337L10.344 4.32837L6.56274 8.09399" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="mx-auto w-full overflow-hidden">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium text-gray-600 dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" class="px-6 py-4">No</th>
                                                <th scope="col" class="px-6 py-4">Nama</th>
                                                <th scope="col" class="px-6 py-4">Keterangan</th>
                                                <th scope="col" class="px-6 py-4">Tanggal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Mark</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Otto</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@mdo</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Jacob</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Thornton</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@fat</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Larry</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Wild</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}