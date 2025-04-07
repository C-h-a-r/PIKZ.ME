import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Footer from '../components/Footer';

// Define types for packages
interface Package {
  id: string;
  name: string;
  description: string;
  contentUrl: string; // URL to the markdown file
}

// Sample packages with URLs to markdown files
const packages: Package[] = [
  {
    id: 'pro-camera',
    name: 'Pro Camera Kit',
    description: 'Professional camera equipment for photographers',
    contentUrl: 'https://raw.githubusercontent.com/C-h-a-r/pikz-wiki-test/refs/heads/main/file.md'
  },
  {
    id: 'lighting',
    name: 'Lighting Package',
    description: 'Professional lighting for studio and location shoots',
    contentUrl: '/content/lighting.md'
  }
];

// Define types for component props
interface AlertBoxProps {
  type: 'info' | 'warning' | 'error';
  children: React.ReactNode;
}

// Component for custom Alert boxes
const AlertBox: React.FC<AlertBoxProps> = ({ type, children }) => {
  const styles = {
    info: "bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-4 rounded",
    warning: "bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-4 rounded",
    error: "bg-red-900/30 border-l-4 border-red-500 p-4 mb-4 rounded"
  };

  return (
    <div className={styles[type.toLowerCase()]}>
      <div className="flex items-center">
        {type === "info" && (
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
        )}
        {type === "warning" && (
          <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
        )}
        {type === "error" && (
          <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
          </svg>
        )}
        <span className={`text-${type === "info" ? "blue" : type === "warning" ? "yellow" : "red"}-100`}>{children}</span>
      </div>
    </div>
  );
};

interface CodeEditorProps {
  code: string;
  language?: string;
  title?: string;
}

// Code Editor Component
const CodeEditor: React.FC<CodeEditorProps> = ({ code, language = 'text', title = 'Code Snippet' }) => {
  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-zinc-700">
      {/* Code header with title and language */}
      <div className="flex justify-between items-center bg-zinc-900 px-4 py-2 border-b border-zinc-700">
        <div className="text-sm font-medium text-gray-300">{title}</div>
        <div className="flex items-center">
          <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-gray-300">{language}</span>
          <button className="ml-2 text-gray-400 hover:text-white p-1" title="Copy code">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Code content with line numbers */}
      <div className="bg-zinc-950 p-4 overflow-x-auto flex">
        {/* Line numbers */}
        <div className="text-right pr-4 text-zinc-600 select-none" style={{minWidth: '1.5rem'}}>
          {code.split('\n').map((_, i) => (
            <div key={i} className="leading-relaxed">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Actual code */}
        <pre className="text-gray-300 flex-1 overflow-x-auto">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

interface TabItem {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  children: TabItem[];
}

// Tabs Component
const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="mb-6">
      <div className="flex border-b border-zinc-700 overflow-x-auto">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === index
                ? 'text-red-400 border-b-2 border-red-400'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 bg-zinc-850 border-l border-r border-b border-zinc-700 rounded-b-lg">
        {children[activeTab]?.content}
      </div>
    </div>
  );
};

interface ImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

// Media Components
const Image: React.FC<ImageProps> = ({ src, alt = 'Image', caption }) => {
  return (
    <figure className="mb-6">
      <div className="overflow-hidden rounded-lg border border-zinc-700">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
};

interface VideoProps {
  src: string;
  poster?: string;
  caption?: string;
}

const Video: React.FC<VideoProps> = ({ src, poster = '/api/placeholder/800/450', caption }) => {
  return (
    <figure className="mb-6">
      <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900">
        <div className="aspect-w-16 aspect-h-9 relative">
          {/* This would be replaced with actual video element in production */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
            <img src={poster} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-500 bg-opacity-80 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

// FAQ Component
const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="mb-6 space-y-4">
      {items.map((item, index) => (
        <details 
          key={index} 
          className="group bg-zinc-850 border border-zinc-700 rounded-lg overflow-hidden"
          open={index === 0} // First item open by default
        >
          <summary className="flex justify-between items-center p-4 font-medium cursor-pointer list-none">
            <span>{item.question}</span>
            <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-4 pt-0 text-gray-400">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
};

// Main Wiki Component
const Wiki: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package>(packages[0]);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch content from markdown file
  useEffect(() => {
    setIsLoading(true);
    
    fetch(selectedPackage.contentUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        setContent(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error loading content:", error);
        setContent(`# Error Loading Content\n\nUnable to load content from ${selectedPackage.contentUrl}`);
        setIsLoading(false);
      });
  }, [selectedPackage]);

  // Parse content and extract custom components
  const parseContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const result: React.ReactNode[] = [];
    
   
    let currentBlockType: string | null = null;
    let blockContent: string[] = [];
    let codeLanguage = '';
    let codeTitle = '';
    let tabTitles: string[] = [];
    let tabContents: string[] = [];
    let currentTabContent = '';
    let currentTabTitle = '';
    let faqItems: FAQItem[] = [];
    let currentQuestion = '';
    let currentAnswer = '';
    

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
  
      if (line.trim().match(/^\[Code(\s+language="([^"]+)")?(\s+title="([^"]+)")?\]$/)) {
        currentBlockType = 'code';
        blockContent = [];
        const languageMatch = line.match(/language="([^"]+)"/);
        const titleMatch = line.match(/title="([^"]+)"/);
        codeLanguage = languageMatch ? languageMatch[1] : 'text';
        codeTitle = titleMatch ? titleMatch[1] : 'Code Snippet';
        continue;
      } else if (line.trim() === '[Tabs]') {
        currentBlockType = 'tabs';
        tabTitles = [];
        tabContents = [];
        continue;
      } else if (line.trim().match(/^\[Tab\s+title="([^"]+)"\]$/)) {
        if (currentBlockType === 'tabs') {
          if (currentTabTitle) {
            tabTitles.push(currentTabTitle);
            tabContents.push(currentTabContent);
          }
          const titleMatch = line.match(/title="([^"]+)"/);
          currentTabTitle = titleMatch ? titleMatch[1] : '';
          currentTabContent = '';
        }
        continue;
      } else if (line.trim() === '[/Tab]') {
        continue;
      } else if (line.trim().match(/^\[Image(\s+src="([^"]+)")?(\s+caption="([^"]+)")?(\s+alt="([^"]+)")?\]$/)) {
        const srcMatch = line.match(/src="([^"]+)"/);
        const captionMatch = line.match(/caption="([^"]+)"/);
        const altMatch = line.match(/alt="([^"]+)"/);
        
        result.push(
          <Image 
            key={`image-${i}`}
            src={srcMatch ? srcMatch[1] : '/api/placeholder/800/450'}
            caption={captionMatch ? captionMatch[1] : undefined}
            alt={altMatch ? altMatch[1] : 'Image'}
          />
        );
        continue;
      } else if (line.trim().match(/^\[Video(\s+src="([^"]+)")?(\s+poster="([^"]+)")?(\s+caption="([^"]+)")?\]$/)) {
        const srcMatch = line.match(/src="([^"]+)"/);
        const posterMatch = line.match(/poster="([^"]+)"/);
        const captionMatch = line.match(/caption="([^"]+)"/);
        
        result.push(
          <Video 
            key={`video-${i}`}
            src={srcMatch ? srcMatch[1] : '/api/placeholder/video'}
            poster={posterMatch ? posterMatch[1] : '/api/placeholder/800/450'}
            caption={captionMatch ? captionMatch[1] : undefined}
          />
        );
        continue;
      } else if (line.trim() === '[FAQ]') {
        currentBlockType = 'faq';
        faqItems = [];
        continue;
      } else if (line.trim().match(/^\[Q\]/)) {
        if (currentBlockType === 'faq') {
          if (currentQuestion && currentAnswer) {
            faqItems.push({ question: currentQuestion, answer: currentAnswer });
          }
          currentQuestion = line.replace(/^\[Q\]\s*/, '').trim();
          currentAnswer = '';
        }
        continue;
      } else if (line.trim().match(/^\[A\]/)) {
        if (currentBlockType === 'faq') {
          currentAnswer = line.replace(/^\[A\]\s*/, '').trim();
        }
        continue;
      }
      
      
      if (line.trim() === '[/Code]') {
        if (currentBlockType === 'code') {
          result.push(
            <CodeEditor 
              key={`code-${i}`}
              code={blockContent.join('\n')}
              language={codeLanguage}
              title={codeTitle}
            />
          );
          currentBlockType = null;
        }
        continue;
      } else if (line.trim() === '[/Tabs]') {
        if (currentBlockType === 'tabs') {
          // Add the last tab if exists
          if (currentTabTitle) {
            tabTitles.push(currentTabTitle);
            tabContents.push(currentTabContent);
          }
          
          // Create tab objects
          const tabItems = tabTitles.map((title, idx) => ({
            title,
            content: tabContents[idx]
          }));
          
          result.push(
            <Tabs key={`tabs-${i}`}>
              {tabItems}
            </Tabs>
          );
          currentBlockType = null;
        }
        continue;
      } else if (line.trim() === '[/FAQ]') {
        if (currentBlockType === 'faq') {
          if (currentQuestion && currentAnswer) {
            faqItems.push({ question: currentQuestion, answer: currentAnswer });
          }
          
          result.push(
            <FAQ key={`faq-${i}`} items={faqItems} />
          );
          currentBlockType = null;
        }
        continue;
      }
      

      if (currentBlockType === 'code') {
        blockContent.push(line);
      } else if (currentBlockType === 'tabs' && currentTabTitle) {
        currentTabContent += line + '\n';
      } else if (line.match(/^\[(\w+)\]\s+(.+)$/)) {
        const alertMatch = line.match(/^\[(\w+)\]\s+(.+)$/);
        if (alertMatch) {
          const [_, typeRaw, content] = alertMatch;
          const type = typeRaw.toLowerCase() as 'info' | 'warning' | 'error';
          if (['info', 'warning', 'error'].includes(type)) {
            result.push(<AlertBox key={`alert-${i}`} type={type}>{content}</AlertBox>);
          }
        }
      } else {
        // Standard markdown content
        result.push(
          <ReactMarkdown
            key={`md-${i}`}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mb-4 text-gray-200">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mb-3 text-gray-300">{children}</h3>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-gray-400 leading-relaxed">{children}</p>
              )
            }}
          >
            {line}
          </ReactMarkdown>
        );
      }
    }
    
    return result;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-zinc-900 border-b border-zinc-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl font-bold text-white">{selectedPackage.name}</h1>
              <p className="text-gray-400 text-sm">{selectedPackage.description}</p>
            </div>
            
            <div className="relative w-full md:w-64">
              <select 
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-2 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                value={selectedPackage.id}
                onChange={(e) => {
                  const selected = packages.find(p => p.id === e.target.value);
                  if (selected) setSelectedPackage(selected);
                }}
              >
                {packages.map(pkg => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
            <div className="grid grid-cols-12">
              {/* Sidebar */}
              <div className="col-span-12 md:col-span-3 border-r border-zinc-700">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">
                    Packages
                  </h2>
                  <div className="space-y-1">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedPackage.id === pkg.id
                            ? 'text-red-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {pkg.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <motion.div 
                key={selectedPackage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-12 md:col-span-9 p-8"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    {parseContent(content)}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wiki;