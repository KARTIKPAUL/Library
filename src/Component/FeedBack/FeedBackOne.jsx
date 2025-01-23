import React from "react";

const FeedBackOne = ({ projects }) => {
  return (
    <section className="bg-gray-50 p-6 sm:px-8 sm:py-6 lg:px-8 lg:py-6 rounded-lg shadow-xl">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 sm:px-8 sm:py-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        <a
          href="/new"
          className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-3 pr-4 py-2 shadow-sm transition-all"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          New
        </a>
      </header>

      {/* Search Form */}
      <form className="relative mb-6">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-4 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-12 ring-1 ring-gray-200 shadow-sm transition-all"
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects..."
        />
      </form>

      {/* Projects List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.url}
              className="group flex flex-col items-start justify-between p-4 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 hover:ring-blue-500 hover:shadow-xl hover:bg-blue-50 transition-all"
            >
              <dl className="grid grid-cols-2 gap-4 w-full">
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {project.title}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Category</dt>
                  <dd className="text-sm text-gray-500 group-hover:text-blue-500">
                    {project.category}
                  </dd>
                </div>
                <div className="col-span-2 flex justify-between items-center">
                  <dt className="sr-only">Users</dt>
                  <dd className="flex space-x-2">
                    {project.users.map((user) => (
                      <img
                        key={user.id}
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        loading="lazy"
                      />
                    ))}
                  </dd>
                </div>
              </dl>
            </a>
          </li>
        ))}
        {/* New Project Button */}
        <li className="flex justify-center">
          <a
            href="/new"
            className="group flex items-center justify-center w-full h-16 bg-white border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-900 font-medium rounded-lg hover:bg-gray-100 hover:text-blue-500 hover:border-blue-500 transition-all"
          >
            <svg
              className="group-hover:text-blue-500 mb-2 text-gray-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New project
          </a>
        </li>
      </ul>
    </section>
  );
};

export default FeedBackOne;
