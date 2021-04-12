import React from "react"

export default class AboutService {
    static get aboutData() {
        return [
            {
                slug: "about-app",
                title: "About the App",
                description:
                    <>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</>,
            },
            {
                slug: "about-author",
                title: "About the Author",
                description:
                    <>This app was developed by Ibas Majid and implemented by Patrick Petersen following the instructions provided for the <a target="_blank" rel="noopener noreferrer" href={"https://ibaslogic.com/react-tutorial-for-beginners/"}>react-tutorial-for-beginners</a>. This version of the application features some enhancements developed by Patrick Petersen.</>,
            },
        ]
    }

    static getAbout(slug) {
        return this.aboutData.find(item => item.slug === slug);
    }
}