import { PaperClipIcon } from "@heroicons/react/solid";

export const UsersList = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <div key={user._id} className="container">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile: {user.name}</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">ID: {user._id}</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name}</dd>
                                </div>

                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">About</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.about}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {user.attachements.length > 0
                                            ? user.attachements.map(el => (
                                                  <ul
                                                      key={el._id}
                                                      className="border border-gray-200 rounded-md divide-y divide-gray-200 mb-2"
                                                  >
                                                      <li
                                                          key={el._id}
                                                          className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                                      >
                                                          <div className="w-0 flex-1 flex items-center">
                                                              <PaperClipIcon
                                                                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                                  aria-hidden="true"
                                                              />
                                                              <span className="ml-2 flex-1 w-0 truncate">
                                                                  {el.originalname}
                                                              </span>
                                                          </div>
                                                          <div className="ml-4 flex-shrink-0">
                                                              <a
                                                                  href={`//localhost:8000/${el.filename}`}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                  download="TotemVC_My_File.pdf"
                                                              >
                                                                  Download
                                                              </a>
                                                          </div>
                                                      </li>
                                                  </ul>
                                              ))
                                            : "No attached files found."}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
