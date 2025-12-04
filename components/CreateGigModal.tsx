import React, { useState } from 'react';
import { X, Sparkles, Loader2 } from 'lucide-react';
import { GigCategory } from '../types';
import { generateGigDescription } from '../services/geminiService';

interface CreateGigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateGigModal: React.FC<CreateGigModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GigCategory | ''>('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [price, setPrice] = useState('50');

  if (!isOpen) return null;

  const handleGenerateAI = async () => {
    if (!title || !category) {
      alert("Please enter a title and category first.");
      return;
    }
    setIsGenerating(true);
    const desc = await generateGigDescription(title, category);
    setDescription(desc);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gig created successfully! (Mock Action)");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Create New Gig
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gig Title</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      I will
                    </span>
                    <input
                      type="text"
                      required
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="do something amazing..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as GigCategory)}
                  >
                    <option value="">Select a category</option>
                    {Object.values(GigCategory).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <button
                      type="button"
                      onClick={handleGenerateAI}
                      disabled={isGenerating}
                      className="inline-flex items-center text-xs font-medium text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-md transition-colors"
                    >
                      {isGenerating ? <Loader2 className="h-3 w-3 mr-1 animate-spin" /> : <Sparkles className="h-3 w-3 mr-1" />}
                      Generate with AI
                    </button>
                  </div>
                  <textarea
                    rows={6}
                    required
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                    placeholder="Describe your service in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-gray-500 text-right">Powered by Gemini 2.5 Flash</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Starting Price ($)</label>
                    <input
                        type="number"
                        min="5"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse -mx-6 -mb-6 mt-6 rounded-b-lg">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create Gig
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGigModal;