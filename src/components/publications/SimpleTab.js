import { useState } from 'react';
import './SimpleTab.css';
import Fade from 'react-reveal/Fade';

const SimpleTab = ({activeKey, children}) => {

    const [key, setKey] = useState(activeKey)


    return (
        <div className='tab-container'>
            <div className='tabs'>
                {children.map(item => {
                    return (
                        <div key={item.props.aKey} className={key===item.props.aKey ? "tab-item active" : "tab-item"}
                            onClick={() => setKey(item.props.aKey)}>
                            {item.props.title}
                        </div>
                    )
                })}
            </div>
            <div className='tab-content'>
                {children.map(item => {
                    return (
                        <div key={item.props.aKey} className={key===item.props.aKey ? "tab-pane active" : "tab-pane"}>
                            <ul>
                                {item.props.children.map((contentItem, index) => {
                                    return (
                                        <Fade bottom>
                                            <li key={index}>
                                                <p>{contentItem}</p>
                                            </li>
                                        </Fade>
                                    )
                                } )}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Tab = () => {
    return (
        <div className='tab'>
        </div>
    )
}

export default SimpleTab;





// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// const isHorizontal = window.innerWidth < 600;

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     if (isHorizontal) {
//         return (
//             <div
//                 role="tabpanel"
//                 hidden={value !== index}
//                 id={`full-width-tabpanel-${index}`}
//                 aria-labelledby={`full-width-tab-${index}`}
//                 {...other}
//             >
//                 {value === index && (
//                     <Box p={3}>
//                         <Typography>{children}</Typography>
//                     </Box>
//                 )}
//             </div>
//         );
//     } else {
//         return (
//             <div
//                 role="tabpanel"
//                 hidden={value !== index}
//                 id={`vertical-tabpanel`}
//                 {...other}
//             >
//                 {value === index && (
//                     <Box p={3}>
//                         <Typography>{children}</Typography>
//                     </Box>
//                 )}
//             </div>
//         );
//     }
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired
// };

// function a11yProps(index) {
//     if (isHorizontal) {
//         return {
//             id: `full-width-tab-${index}`,
//             "aria-controls": `full-width-tabpanel-${index}`
//         };
//     } else {
//         return {
//             id: `vertical-tab-${index}`
//         };
//     }
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: "theme.palette.background.paper",
//         display: "flex",
//         height: 300
//     },
//     tabs: {
//         borderRight: `1px solid ${theme.palette.divider}`
//     }
// }));

// const SimpleTab = () => {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const experienceItems = {
//         CBBEL: {
//             jobTitle: "Intern Software Developer @",
//             duration: "MAY 2022 - JUNE 2022",
//             desc: [
//                 "CBBEL: Christopher B. Burke Engineering",
//                 "Participating in development of the ADA Design Ramp Tool project - a computational aid for engineers in designing sidewalks quickly and conveniently",
//                 "Support, give ideas to redesign the interface",
//                 "Using HTML, CSS and JavaScript"
//             ]
//         },
//         "University of Illinois Chicago": {
//             jobTitle: "Teaching Assistant @",
//             duration: "JAN 2022 - MAY 2022",
//             desc: [
//                 "Assist course instructors in preparing classes and course materials (e.g. answering inquiries, maintaining course websites, copying)",
//                 "Support students in practice/discussion sessions or office hours"
//             ]
//         },
//         journal: {
//             jobTitle: "Journal Publications",
//             duration: "",
//             desc: [
//                 "Rener, A., Karatas, A., & Videan, B. (2022). Innovative Design and Execution Model for Improving Productivity of Interior Prefabricated Commercial Wall Assemblies. Buildings, 13(1), 68.",
//                 "Palani, H., & Karatas, A. (2022). Holistic approach for reducing occupants’ energy consumption in hotel buildings. Journal of Cleaner Production, 365, 132679.",
//             ]
//         },
//     };

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div className={classes.root}>
//             <Tabs
//                 orientation={!isHorizontal ? "vertical" : null}
//                 variant={isHorizontal ? "fullWidth" : "scrollable"}
//                 value={value}
//                 onChange={handleChange}
//                 className={classes.tabs}
//             >
//                 {Object.keys(experienceItems).map((key, i) => (
//                     <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
//                 ))}
//             </Tabs>
//             {Object.keys(experienceItems).map((key, i) => (
//                 <TabPanel value={value} index={i}>
//                     <span className="joblist-job-title">
//                         {experienceItems[key]["jobTitle"] + " "}
//                     </span>
//                     <span className="joblist-job-company">{key}</span>
//                     <div className="joblist-duration">
//                         {experienceItems[key]["duration"]}
//                     </div>
//                     <ul className="job-description">
//                         {experienceItems[key]["desc"].map(function (descItem, i) {
//                             return (
//                                     <li key={i}>{descItem}</li>
//                             );
//                         })}
//                     </ul>
//                 </TabPanel>
//             ))}
//         </div>
//     );
// };

// export default SimpleTab;
