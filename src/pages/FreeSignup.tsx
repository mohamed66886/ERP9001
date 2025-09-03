import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "antd";
import { Select } from "antd";

const countries = [
	{ code: "+20", flag: "🇪🇬" },
	{ code: "+966", flag: "🇸🇦" },
	{ code: "+971", flag: "🇦🇪" },
	// أضف المزيد حسب الحاجة
];

const FreeSignup = () => {
	const [form, setForm] = useState({
		businessName: "",
		email: "",
		phone: "",
		country: countries[0].code,
		subdomain: "",
		password: "",
		confirmPassword: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [progress, setProgress] = useState(0);

	// دوال التحقق من صحة البيانات
	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePhone = (phone: string) => {
		const phoneRegex = /^[0-9]{9,15}$/;
		return phoneRegex.test(phone.replace(/[\s-]/g, ''));
	};

	const validatePassword = (password: string) => {
		return password.length >= 8 && 
			   /[A-Z]/.test(password) && 
			   /[a-z]/.test(password) && 
			   /[0-9]/.test(password);
	};

	const validateSubdomain = (subdomain: string) => {
		const subdomainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$/;
		return subdomainRegex.test(subdomain) && subdomain.length >= 3;
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!form.businessName.trim()) {
			newErrors.businessName = "الاسم التجاري مطلوب";
		} else if (form.businessName.trim().length < 2) {
			newErrors.businessName = "الاسم التجاري يجب أن يكون أكثر من حرفين";
		}

		if (!form.email.trim()) {
			newErrors.email = "البريد الإلكتروني مطلوب";
		} else if (!validateEmail(form.email)) {
			newErrors.email = "البريد الإلكتروني غير صالح";
		}

		if (!form.phone.trim()) {
			newErrors.phone = "رقم الجوال مطلوب";
		} else if (!validatePhone(form.phone)) {
			newErrors.phone = "رقم الجوال غير صالح";
		}

		if (!form.subdomain.trim()) {
			newErrors.subdomain = "صفحة الدخول مطلوبة";
		} else if (!validateSubdomain(form.subdomain)) {
			newErrors.subdomain = "صفحة الدخول يجب أن تحتوي على أحرف وأرقام فقط (3-63 حرف)";
		}

		if (!form.password) {
			newErrors.password = "كلمة المرور مطلوبة";
		} else if (!validatePassword(form.password)) {
			newErrors.password = "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل مع أحرف كبيرة وصغيرة وأرقام";
		}

		if (!form.confirmPassword) {
			newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
		} else if (form.password !== form.confirmPassword) {
			newErrors.confirmPassword = "كلمة المرور غير متطابقة";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const simulateProgress = () => {
		setProgress(0);
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + Math.random() * 15;
			});
		}, 200);
	};

	const resetForm = () => {
		setTimeout(() => {
			setSubmitted(false);
			setProgress(0);
			setForm({
				businessName: "",
				email: "",
				phone: "",
				country: countries[0].code,
				subdomain: "",
				password: "",
				confirmPassword: "",
			});
			setErrors({});
		}, 3000);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { name: string; value: string } }
	) => {
		if ("target" in e) {
			setForm({ ...form, [e.target.name]: e.target.value });
			// مسح رسالة الخطأ عند التعديل
			if (errors[e.target.name]) {
				setErrors({ ...errors, [e.target.name]: "" });
			}
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setIsLoading(true);
		simulateProgress();

		try {
			// محاكاة إرسال البيانات للخادم
			await new Promise(resolve => setTimeout(resolve, 2500));
			
			setSubmitted(true);
			resetForm();
		} catch (error) {
			console.error("Error submitting form:", error);
			setErrors({ submit: "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى" });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-[1200px] p-4 flex flex-col justify-between md:flex-row gap-8 md:gap-[60px]">
				{/* يسار: نموذج التسجيل */}
				<div className="w-full md:w-[469px] bg-white rounded-lg shadow-lg p-4 md:p-8">
					<h2 className="text-xl md:text-2xl font-bold mb-2 text-center text-gray-800">
						إنشاء حساب جديد
					</h2>
					<p className="text-center text-gray-500 mb-4 md:mb-6 text-sm md:text-base">
						دقيقتين فقط لبدء الاستخدام
					</p>
					{submitted ? (
						<div className="text-center animate-fade-in">
							<div className="mb-4">
								<svg className="mx-auto w-16 h-16 text-green-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-green-600 mb-2">
								تم تسجيلك بنجاح!
							</h3>
							<p className="text-gray-600 text-sm md:text-base mb-4">
								سوف يتم مراجعة البيانات والتواصل معكم في أقرب وقت
							</p>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div 
									className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-out"
									style={{ width: '100%' }}
								></div>
							</div>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4">
							{errors.submit && (
								<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded animate-shake">
									{errors.submit}
								</div>
							)}
							
							<div>
								<input
									type="text"
									name="businessName"
									placeholder="الاسم التجاري *"
									value={form.businessName}
									onChange={handleChange}
									className={`border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors ${
										errors.businessName ? 'border-red-500 bg-red-50' : 'border-gray-300'
									}`}
									required
									disabled={isLoading}
								/>
								{errors.businessName && (
									<p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.businessName}</p>
								)}
							</div>
							
							<div>
								<input
									type="email"
									name="email"
									placeholder="البريد الإلكتروني *"
									value={form.email}
									onChange={handleChange}
									className={`border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors ${
										errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
									}`}
									required
									disabled={isLoading}
								/>
								{errors.email && (
									<p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.email}</p>
								)}
							</div>
							<div className="flex flex-col sm:flex-row gap-2">
								<div className="flex flex-row gap-0">
									<Input
										type="tel"
										name="phone"
										placeholder="رقم الجوال *"
										value={form.phone}
										onChange={handleChange}
										style={{ 
											minWidth: 0, 
											flex: 1, 
											height: 40, 
											borderTopLeftRadius: 0, 
											borderBottomLeftRadius: 0,
											borderColor: errors.phone ? '#ef4444' : undefined,
											backgroundColor: errors.phone ? '#fef2f2' : undefined
										}}
										className={`border rounded-r px-3 py-2 focus:outline-primary text-sm md:text-base border-l-0 transition-colors ${
											errors.phone ? 'border-red-500' : ''
										}`}
										required
										disabled={isLoading}
									/>
									<Select
										value={form.country}
										onChange={(value) => setForm({ ...form, country: value })}
										style={{ minWidth: 80, height: 40, border: "none", boxShadow: "none", borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
										className="focus:shadow-none focus:outline-none text-sm md:text-base border border-r-0 rounded-l"
										options={countries.map((c) => ({
											value: c.code,
											label: `${c.flag} ${c.code}`,
										}))}
										disabled={isLoading}
									/>
								</div>
								{errors.phone && (
									<p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.phone}</p>
								)}
							</div>
							
							<div>
								<div className="flex flex-row gap-0 items-center">
									<span className="border rounded-l px-2 py-2 bg-gray-100 text-gray-500 text-xs md:text-base border-r-0">
										erp90.cloud.
									</span>
									<input
										type="text"
										name="subdomain"
										placeholder="صفحة الدخول *"
										value={form.subdomain}
										onChange={handleChange}
										className={`border px-3 py-2 flex-1 focus:outline-primary text-sm md:text-base border-l-0 border-r-0 rounded-none transition-colors ${
											errors.subdomain ? 'border-red-500 bg-red-50' : 'border-gray-300'
										}`}
										required
										disabled={isLoading}
									/>
									<span className="border rounded-r px-2 py-2 bg-gray-100 text-gray-500 text-xs md:text-base border-l-0">
										https ://
									</span>
								</div>
								{errors.subdomain && (
									<p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.subdomain}</p>
								)}
							</div>
							
							<div>
								<div className="relative">
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										placeholder="كلمة السر *"
										value={form.password}
										onChange={handleChange}
										className={`border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors ${
											errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
										}`}
										required
										disabled={isLoading}
									/>
									<span
										className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
										onClick={() => setShowPassword((prev) => !prev)}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
											<path d="M1.5 12C3.5 7 8 4 12 4c4 0 8.5 3 10.5 8-2 5-6.5 8-10.5 8-4 0-8.5-3-10.5-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
											<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
										</svg>
									</span>
								</div>
								{errors.password && (
									<p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.password}</p>
								)}
							</div>
							
							<div>
								<div className="relative">
									<input
										type={showConfirmPassword ? "text" : "password"}
										name="confirmPassword"
										placeholder="أعد إدخال كلمة المرور *"
										value={form.confirmPassword}
										onChange={handleChange}
										className={`border rounded px-3 py-2 w-full focus:outline-primary text-sm md:text-base transition-colors ${
											errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-300'
										}`}
										required
										disabled={isLoading}
									/>
									<span
										className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
										onClick={() => setShowConfirmPassword((prev) => !prev)}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
											<path d="M1.5 12C3.5 7 8 4 12 4c4 0 8.5 3 10.5 8-2 5-6.5 8-10.5 8-4 0-8.5-3-10.5-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
											<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
										</svg>
									</span>
								</div>
								{errors.confirmPassword && (
									<p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.confirmPassword}</p>
								)}
							</div>
							
							{isLoading && (
								<div className="mb-4">
									<div className="flex items-center justify-center mb-2">
										<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
										<span className="mr-2 text-gray-600">جاري الإرسال...</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div 
											className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-out"
											style={{ width: `${progress}%` }}
										></div>
									</div>
								</div>
							)}
							
							<Button
								type="submit"
								className="bg-green-600 hover:bg-green-700 text-white w-full text-lg font-bold py-3 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
								disabled={isLoading}
							>
								{isLoading ? "جاري الإرسال..." : "ابدأ الاستخدام مجانًا"}
							</Button>
						</form>
					)}
					<div className="mt-4 text-center text-gray-700 text-sm md:text-base">
						 لديك حساب؟{" "}
						<a
							href="#"
							className="text-primary font-bold underline"
						>
							تسجيل للدخول
						</a>
					</div>
				</div>
				{/* يمين: نص تسويقي */}
				<div className="w-full md:w-[400px] md:flex flex-col justify-center items-center text-right hidden">
					<img
						src="free.png"
						alt="دفترة"
						className="w-24 mb-4"
					/>
					<h1 className="text-3xl font-bold text-primary mb-4">
						ERP90
					</h1>
					<h2 className="text-xl font-bold text-gray-700 mb-2">
						كل ما تحتاجه لإدارة أعمالك في برنامج واحد!
					</h2>
					<p className="text-gray-600 mb-4 text-lg">
						يدعم أكثر من 50 مجالًا مختلفًا وأكثر من 20 تطبيق لإدارة الأعمال
						باحترافية!
					</p>
					<div className="text-gray-500 text-sm mb-2">
						جميع هذه الميزات مخصصة حسب مجال عملك!
					</div>
					<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-right w-full max-w-md">
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							المبيعات ونقاط البيع
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							الفاتورة الإلكترونية
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							الحسابات العامة
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							المخزون
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							إدارة العملاء
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							الفروع
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							الموارد البشرية
						</div>
						<div className="flex items-center gap-2 text-primary font-bold">
							<span className="inline-block w-5 h-5 text-green-600">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
								</svg>
							</span>
							Dورة العمل
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FreeSignup;
