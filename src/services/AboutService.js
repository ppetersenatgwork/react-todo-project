export default class AboutService {
    static get aboutData() {
        return [
            {
                slug: "about-app",
                title: "About the App",
                description:
                    "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
            },
            {
                slug: "about-author",
                title: "About the Author",
                description:
                    "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
            },
        ]
    }

    static getAbout(slug) {
        return this.aboutData.find(item => item.slug === slug);
    }

    static hasAbout(slug) {
        return this.aboutData.includes(slug);
    }
}