import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  Search,
  ArrowLeft,
  Star,
  Clock,
  Users
} from "lucide-react";

const Docs = () => {
  const categories = [
    {
      title: "البداية السريعة",
      icon: BookOpen,
      description: "ابدأ مع ERP90 في دقائق معدودة",
      articles: 12,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "الفيديوهات التعليمية",
      icon: Video,
      description: "دروس مرئية شاملة",
      articles: 25,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "أدلة المستخدم",
      icon: FileText,
      description: "أدلة مفصلة لكل ميزة",
      articles: 45,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "التحديثات",
      icon: Download,
      description: "آخر التحديثات والميزات الجديدة",
      articles: 8,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const popularArticles = [
    {
      title: "كيفية إعداد نظام ERP90 لأول مرة",
      description: "دليل شامل لإعداد النظام من البداية",
      category: "البداية السريعة",
      readTime: "10 دقائق",
      views: 1250,
      rating: 4.8
    },
    {
      title: "إدارة المخزون والمنتجات",
      description: "تعلم كيفية إضافة وإدارة المنتجات في النظام",
      category: "أدلة المستخدم",
      readTime: "15 دقائق",
      views: 890,
      rating: 4.9
    },
    {
      title: "إنشاء التقارير المالية",
      description: "كيفية إنشاء وتخصيص التقارير المالية",
      category: "المحاسبة",
      readTime: "20 دقائق",
      views: 750,
      rating: 4.7
    },
    {
      title: "ربط النظام مع البنوك",
      description: "دليل تكامل النظام مع البنوك المحلية",
      category: "التكامل",
      readTime: "12 دقائق",
      views: 650,
      rating: 4.6
    }
  ];

  const resources = [
    {
      title: "دليل المستخدم الكامل",
      description: "دليل PDF شامل لجميع ميزات النظام",
      type: "PDF",
      size: "15 MB",
      downloads: 5420
    },
    {
      title: "قوالب Excel",
      description: "قوالب جاهزة لاستيراد البيانات",
      type: "ZIP",
      size: "2.3 MB",
      downloads: 3250
    },
    {
      title: "دليل APIs",
      description: "وثائق فنية للمطورين",
      type: "PDF",
      size: "8.5 MB",
      downloads: 890
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            مركز المساعدة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            كل ما تحتاج لمعرفته عن استخدام نظام ERP90 - أدلة، فيديوهات، وموارد شاملة
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="ابحث في المساعدة..." 
              className="pr-12 py-3 text-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {category.articles} مقال
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Popular Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up">
              المقالات الأكثر شعبية
            </h2>
            
            <div className="space-y-6">
              {popularArticles.map((article, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-card transition-all duration-300 cursor-pointer animate-fade-in-up shadow-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {article.description}
                        </p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-muted-foreground flex-shrink-0 mr-4" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {article.rating}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources Sidebar */}
          <div className="animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              الموارد والتحميلات
            </h2>
            
            <div className="space-y-4 mb-8">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-soft hover:shadow-card transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground text-sm">
                        {resource.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {resource.size} • {resource.downloads.toLocaleString()} تحميل
                      </span>
                      <Button size="sm" variant="outline">
                        تحميل
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Card */}
            <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-lg">تحتاج مساعدة إضافية؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  لم تجد ما تبحث عنه؟ فريق الدعم الفني جاهز لمساعدتك
                </p>
                <div className="space-y-2">
                  <Button variant="hero" size="sm" className="w-full">
                    اتصل بالدعم الفني
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    إرسال تذكرة دعم
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-lg hero-gradient animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ابدأ تجربتك المجانية اليوم واحصل على دعم كامل من فريق الخبراء
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              ابدأ التجربة المجانية
            </Button>
            <Button variant="outline-hero" size="lg">
              تحدث مع خبير
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;