import React from "react"

export default class AboutService {
    static get aboutData() {
        return [
            {
                slug: "about-app",
                title: "About the App",
                description:
                    <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</p>,
            },
            {
                slug: "about-author",
                title: "About the Author",
                description:
                    <p>This app was developed by Ibas Majid and implemented by Patrick Petersen following the instructions provided for the <a href={"https://ibaslogic.com/react-tutorial-for-beginners/"}>react-tutorial-for-beginners</a>. This version of the application features some enhancements developed by Patrick Petersen.</p>,
            },
        ]
    }

    static getAbout(slug) {
        return this.aboutData.find(item => item.slug === slug);
    }
}