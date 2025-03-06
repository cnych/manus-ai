"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart2, Globe, Code2, PenTool, FileSearch } from "lucide-react";
import Image from "next/image";

// 定义用例数据结构
interface UseCase {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function FeaturedServers() {
  const t = useTranslations("Cases");

  // 用例数据
  const useCases: UseCase[] = [
    {
      id: "data-analysis",
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: t("cases.data-analysis.title"),
      description: t("cases.data-analysis.description"),
      imageUrl: "/images/cases/data-analysis.webp",
      link: "https://manus.im/share/f878HJiFifFQca1f0tckhQ?replay=1"
    },
    {
      id: "code-development",
      icon: <Code2 className="h-6 w-6 text-green-500" />,
      title: t("cases.code-development.title"),
      description: t("cases.code-development.description"),
      imageUrl: "/images/cases/code-development.webp",
      link: "https://manus.im/share/IxyqQjnS7cDMhIVmgCquxG?replay=1"
    },
    {
      id: "content-creation",
      icon: <PenTool className="h-6 w-6 text-purple-500" />,
      title: t("cases.content-creation.title"),
      description: t("cases.content-creation.description"),
      imageUrl: "/images/cases/content-creation.webp",
      link: "https://manus.im/share/pAdLIvlktJmV945593mFio?replay=1"
    },
    {
      id: "research",
      icon: <FileSearch className="h-6 w-6 text-amber-500" />,
      title: t("cases.research.title"),
      description: t("cases.research.description"),
      imageUrl: "/images/cases/research.webp",
      link: "https://manus.im/share/xFgpHb15vKqfRPWIs3JJPJ?replay=1"
    },
    {
      id: "travel-planning",
      icon: <Globe className="h-6 w-6 text-rose-500" />,
      title: t("cases.travel-planning.title"),
      description: t("cases.travel-planning.description"),
      imageUrl: "/images/cases/travel-planning.webp",
      link: "https://manus.im/share/brWKUSp51ItvVMBpcXNCZ1?replay=1"
    },
    {
      id: "document-processing",
      icon: <FileText className="h-6 w-6 text-cyan-500" />,
      title: t("cases.document-processing.title"),
      description: t("cases.document-processing.description"),
      imageUrl: "/images/cases/contract-review.webp",
      link: "https://manus.im/share/C54gwsF9Aafq74DGIRBUW5?replay=1"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <Link 
              key={useCase.id} 
              href={useCase.link}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="ml-2 text-xl font-bold">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {useCase.description}
                </p>
                <div className="mt-4 relative h-40 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image src={useCase.imageUrl} alt={useCase.title} fill className="object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="https://manus.im/usecases">
              {t("viewAll")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
