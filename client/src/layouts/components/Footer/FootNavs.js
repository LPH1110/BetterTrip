function FootNavs({ data }) {
    return (
        <div className="">
            <h5 className="mb-7">{data.title}</h5>
            <ul className="text-xl text-slate-200">
                {data.items.map((item) => (
                    <li key={item.id} className="mb-3 py-1">
                        <a href="#" className="text-xl ease-in-out duration-200 hover:text-sky-400">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FootNavs;
