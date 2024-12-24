

export function Progress({ stats, color }) {
    const progressStops = {
        "blue": {stops: "from-blue-500 to-cyan-500"},
        "brown": {stops: "from-[#B99152] to-[#dbbc8b]"},
        "gray": {stops: "from-gray-500 to-gray-300"},
        "green": {stops: "from-green-500 to-green-200"},
        "pink": {stops: "from-pink-500 to-pink-200"},
        "purple": {stops: "from-purple-500 to-purple-200"},
        "red": {stops: "from-[#EE781E] to-[#F5C67B]"},
        "yellow": {stops: "from-yellow-500 to-yellow-200"}
    }
    const progress = `${(stats.base_stat / 100) * 450}px`
    return (
        <div className="flex items-center gap-4">
            <p className="font-mada font-bold w-20">{`${stats.stat.name.charAt(0).toUpperCase()}${stats.stat.name.slice(1)}`}</p>
            <div className={`h-3 rounded-3xl bg-gradient-to-r ${progressStops[color] ? progressStops[color].stops : progressStops["blue"].stops}`} style={{ width: `${progress}` }}></div>
            <p className="font-mada font-bold">{stats.base_stat}</p>
        </div>
    )
}