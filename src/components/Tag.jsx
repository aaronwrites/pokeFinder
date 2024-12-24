import { Electric } from "../assets/tagIcons/Electric"
import { Fighting } from "../assets/tagIcons/Fighting"
import { Fire } from "../assets/tagIcons/Fire"
import { Flying } from "../assets/tagIcons/Flying"
import { Grass } from "../assets/tagIcons/Grass"
import { Ground } from "../assets/tagIcons/Ground"
import { Ice } from "../assets/tagIcons/Ice"
import { Normal } from "../assets/tagIcons/Normal"
import { Water } from "../assets/tagIcons/Water"


export function Tag({ tags }) {
    const colors = {
        "fire": {bg: "bg-[#EE781E]", text: "text-[#FF9F55]"},
        "normal": {bg: "bg-[#A8A877]", text: "text-[#FFFFB6]"},
        "grass": {bg: "bg-[#6DE239]", text: "text-[#9BFF6F]"},
        "electric": {bg: "bg-[#5E2BE9]", text: "text-[#BE8CFF]"},
        "fighting": {bg: "bg-[#CE3939]", text: "text-[#FF6060]"},
        "flying": {bg: "bg-[#A933DC]", text: "text-[#F760FF]"},
        "ground": {bg: "bg-[#DAF845]", text: "text-[#E4FF60]"},
        "ice": {bg: "bg-[#23DECB]", text: "text-[#93FCEA]"},
        "water": {bg: "bg-[#23DECB]", text: "text-[#93FCEA]"}
    }

    const typeIcons = {
        "electric": Electric,
        "fighting": Fighting,
        "fire": Fire,
        "flying": Flying,
        "grass": Grass,
        "ground": Ground,
        "ice": Ice,
        "normal": Normal,
        "water": Water
    }
    return (

        <div className="flex gap-4">
            {tags.map((tag, index) => {
                const Icon = typeIcons[tag.type.name]
                return (
                    <div 
                        key={index} 
                        className={`bg-opacity-[40%] ${colors[tag.type.name]?colors[tag.type.name].bg:"bg-[#DAF845]"} ${colors[tag.type.name]?colors[tag.type.name].text:"text-[#E4FF60]"} py-2 px-5 rounded-[100px] flex items-center w-fit font-mada gap-2 shadow-lg`}>
                        {Icon ? <Icon />: <Normal />}
                        <p className="font-mada font-semibold capitalize">
                            {tag.type.name}
                        </p>
                    </div>
            )
            })}
        </div>
    )
}