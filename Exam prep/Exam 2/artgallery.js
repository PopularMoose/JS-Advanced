class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.listOfArticles = [];
        this.guests = [];
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();
        let isInArray = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }
        for (const element of this.listOfArticles) {
            if (element.articleName === articleName && element.articleModel === articleModel) {
                element.quantity += Number(quantity);
                isInArray = true;
            }
        }
        if (!isInArray) {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {


        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }
        let object = {
            guestName,
            points: 0,
            purchaseArticle: 0
        };

        switch (personality) {
            case 'Vip': object.points = 500;
                break;

            case 'Middle': object.points = 250;
                break;

            default: object.points = 50;
                break;
        }

        this.guests.push(object);

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        let article;
        let guest;

        let isArticleInArray = false;

        for (let element of this.listOfArticles) {
            if (element.articleName !== articleName || element.articleModel !== articleModel) {
                isArticleInArray = false;
            } else {
                article = element;
                isArticleInArray = true;
                break;
            }
        }
        if (!isArticleInArray) {
            throw new Error('This article is not found.');
        }
        if (article.quantity === 0) {
            throw new Error(`The ${articleName} is not available.`)
        }

        let isGuestInArr = false;

        for (const element of this.guests) {
            if (element.guestName !== guestName) {
                isGuestInArr = false;
            } else {
                guest = element;
                isGuestInArr = true;
                break;
            }

            if (!isGuestInArr) {
                return 'This guest is not invited.'
            }

            if (guest.points < this.possibleArticles[articleModel]) {
                return 'You need to more points to purchase the article.';
            } else {
                article.quantity--;
                guest.points -= this.possibleArticles[articleModel];
                guest.purchaseArticle++;
            }

            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');


