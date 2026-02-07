export default function Button({ children, primary = false }) {
    const base =
        "rounded-lg px-6 py-3 font-semibold transition-all duration-200";
    const style = primary
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "border border-slate-900 hover:bg-slate-100";

    return <button className={`${base} ${style}`}>{children}</button>;
}
