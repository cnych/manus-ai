"use client";

import React from "react";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import { Markdown } from "@/components/ui/markdown";
import type { MCPServer } from "@/types/server";
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { useTranslations } from "next-intl";

export function ServerDetails({ server }: { server: MCPServer }) {
  const t = useTranslations('Servers');
  const [content, setContent] = useState("");

  useEffect(() => {
    async function processContent() {
      if (server) {
        const processedContent = await remark()
          .use(html)
          .process(server.description);
        const contentHtml = processedContent.toString();
        setContent(contentHtml);
      }
    }
    processContent();
  }, [server]);


  if (!server) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Server not found</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">The requested server could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: t('title'), href: '/servers' },
          { label: server.name }
        ]}
      />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-750 
        rounded-2xl p-8 mb-8 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {server.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {server.digest}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {server.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/80 dark:bg-gray-700/80 rounded-full text-sm font-medium
                    text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {server.icon ? (
            <div
              className="flex-shrink-0 ml-4 w-16 h-16 p-2 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 shadow-sm"
            >
              <img 
                src={server.icon} 
                alt={server.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          ) : (
            <div 
              className="flex-shrink-0 ml-6 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold
              bg-white dark:bg-gray-700 shadow-sm"
            >
              {server.name[0]}
            </div>
          )}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            {t('author')} & {t('links')}
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t('author')}</div>
              <div className="mt-1 font-medium text-gray-900 dark:text-gray-100">{server.author}</div>
            </div>
            {server.repository && (
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t('repository')}</div>
                <a
                  href={server.repository}
                  className="mt-1 text-blue-600 dark:text-blue-400 hover:underline block truncate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {server.repository}
                </a>
              </div>
            )}
            {server.homepage && (
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t('homepage')}</div>
                <a
                  href={server.homepage}
                  className="mt-1 text-blue-600 dark:text-blue-400 hover:underline block truncate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {server.homepage}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            {t('capabilities')}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(server.capabilities).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300 capitalize">{key}</span>
                <span className={`flex items-center ${
                  value ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {value ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm prose dark:prose-invert max-w-none"
      >
        <Markdown content={content} />
      </div>
    </div>
  );
}
