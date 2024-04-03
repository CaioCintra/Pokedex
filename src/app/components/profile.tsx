export default function Profile(info: any) {
  return (
    <>
      <div className="w-4/5 h-4/5 bg-slate-100 rounded-2xl outline-none flex justify-center">
        <div className="w-full h-1/6 bg-red-500 rounded-t-2xl flex justify-evenly items-center">
          <p className="text-gray-100 font-bold text-center text-6xl capitalize">
            {info.name}
          </p>
          <p className="text-zinc-900 font-bold text-center text-6xl capitalize flex-shrink-0">
            #{info.id}
          </p>
        </div>
      </div>
    </>
  );
}
