import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import { BlogPost } from '../../types/blog';

export default function BlogAdmin() {
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();

  const handleCreate = (post: BlogPost) => {
    // TODO: Implement create functionality
    console.log('Creating post:', post);
    setIsCreating(false);
    navigate('/admin/blog');
  };

  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Blog Posts</h1>
            <p className="mt-2 text-sm text-gray-700">
              Manage your blog posts here
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setIsCreating(true)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Post
            </button>
          </div>
        </div>

        {isCreating ? (
          <BlogForm onSubmit={handleCreate} onCancel={() => setIsCreating(false)} />
        ) : (
          <BlogList />
        )}
      </div>
    </AdminLayout>
  );
}