import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaRegCircle } from "react-icons/fa6";
import { RxHalf2 } from "react-icons/rx";
import { ReactComponent as NoPriorityIcon } from '../icons_FEtask/No-priority.svg';
import { ReactComponent as HighPriorityIcon } from '../icons_FEtask/Img_High_Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../icons_FEtask/SVG - Urgent Priority grey.svg';
import { ReactComponent as Backlog } from '../icons_FEtask/Backlog.svg';
import { ReactComponent as Todo } from '../icons_FEtask/To-do.svg';
import { ReactComponent as InProgress } from '../icons_FEtask/in-progress.svg';
import { ReactComponent as Done } from '../icons_FEtask/Done.svg';
import { ReactComponent as Cancelled } from '../icons_FEtask/Cancelled.svg';
import { ReactComponent as TDot } from '../icons_FEtask/3 dot menu.svg';

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <NoPriorityIcon/>},
    { title: "low", color: "lightgray", icon: <LowPriorityIcon /> },
    { title: "medium", color: "gray", icon: <MediumPriorityIcon /> },
    { title: "high", color: "black", icon: <HighPriorityIcon/> },
    { title: "urgent", color: "orange", icon: <UrgentPriorityIcon /> }
];
export const status = [
    { title: "backlog", color: "black", icon: <Backlog /> },
    { title: "todo", color: "lightgrey", icon: <Todo /> },
    { title: "in progress", color: "#EBCB62", icon: <InProgress /> },
    { title: "done", color: "#606ACB", icon: <Done /> },
    { title: "cancelled", color: "gray", icon: <Cancelled /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <TDot />,
    },
    todo: {
        color: "lightgrey",
        icon: <FaRegCircle />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <RxHalf2 />,
    },
    done: {
        color: "#606ACB",
        icon: <FaCheckCircle />,
    },
    cancelled: {
        color: "gray",
        icon: <FaCircleXmark />,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};