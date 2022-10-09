import React from "react";

const QuestSelector = () => {
  return (
    <div className="quest-selector absolute inset-y-0 right-0 w-96 top-20 right-8">
      <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
        <div className="relative z-10 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden my-auto xl:mt-18 bg-slate-800">
          <section>
            <header className="rounded-t-xl space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 highlight-white/10 bg-slate-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900 text-white">
                  Quests
                </h2>
              </div>
              <div className="group relative rounded-md bg-slate-700 highlight-white/10 dark:focus-within:bg-transparent">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500 text-slate-500"
                  data-darkreader-inline-fill=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
                <input
                  type="text"
                  aria-label="Filter quests"
                  placeholder="Filter quests..."
                  className="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100 placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
                />
              </div>
            </header>
            <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 bg-slate-900/40 ring-1 dark:ring-white/5 max-height-80 overflow-y-scroll">
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
                      API Integration
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">Engineering</dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                        alt=""
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
                        loading="lazy"
                        decoding="async"
                      />
                    </dd>
                  </div>
                </dl>
              </li>
              <li className="flex">
                <div className="group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 cursor-pointer hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 border-slate-700 text-slate-100 dark:hover:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mb-1 text-slate-400 group-hover:text-blue-500"
                    data-darkreader-inline-fill=""
                  >
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"></path>
                  </svg>
                  New project
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default QuestSelector;
