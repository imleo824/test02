const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/ModuleStatusCard.tsx', 'utf8');

code = code.replace(/<div className="bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-7  text-slate-900">/, '<div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 md:p-6 text-slate-900">');
code = code.replace(/<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-slate-300">/, '<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-slate-100">');

// Update section 1
code = code.replace(/<div className="text-sm font-black text-slate-900 tracking-wider flex items-center gap-2 shrink-0">/, '<div className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 shrink-0 mb-1">');
code = code.replace(/<span className="w-2.5 h-2.5 rounded-full bg-slate-900" \/>/, '<span className="w-2 h-2 rounded-full bg-slate-400" />');
code = code.replace(/<div className="text-base md:text-lg font-black text-slate-900 leading-relaxed my-auto">/, '<div className="text-sm md:text-base font-bold text-slate-900 leading-relaxed my-auto">');

// Update section 2
code = code.replace(/<div className="text-sm font-black text-slate-900 tracking-wider flex items-center gap-2 shrink-0">/, '<div className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 shrink-0 mb-1">');
code = code.replace(/<span className="w-2.5 h-2.5 rounded-full bg-blue-700" \/>/, '<span className="w-2 h-2 rounded-full bg-blue-500" />');
code = code.replace(/<span className="text-lg md:text-xl font-black text-slate-900">/, '<span className="text-sm md:text-base font-black text-slate-900 ml-1">');

code = code.replace(/<div className="space-y-2 my-auto">/, '<div className="space-y-2 my-auto">');
code = code.replace(/<div key=\{idx\} className="flex items-center justify-between bg-white border border-slate-100 px-3 py-1.5 rounded-lg ">/g, '<div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg">');

// Update section 3
code = code.replace(/<div className="text-sm font-black text-slate-900 tracking-wider flex items-center gap-2 shrink-0">/, '<div className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 shrink-0 mb-1">');
code = code.replace(/<span className="w-2.5 h-2.5 rounded-full bg-blue-700" \/>/, '<span className="w-2 h-2 rounded-full bg-emerald-500" />');
code = code.replace(/<span className="text-lg md:text-xl font-black text-slate-900">/, '<span className="text-sm md:text-base font-black text-slate-900 ml-1">');

code = code.replace(/<span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">/, '<span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none tabular-nums">');
code = code.replace(/bg-slate-200 rounded-full h-3\.5 overflow-hidden border border-slate-100/g, 'bg-slate-100 rounded-full h-2 overflow-hidden');
code = code.replace(/bg-slate-900 h-3\.5 rounded-full/g, 'bg-emerald-500 h-2 rounded-full');

fs.writeFileSync('src/components/sections/WorldCupGuaranteeReview/ModuleStatusCard.tsx', code);
