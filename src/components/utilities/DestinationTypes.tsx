export interface DestinationsType {
    result: [{
        _id: string
        name: string
        english: string
        destinationCategory: {
            _id: string
            name: string
            english: string
        }
        additionalInfo: string
        image: string
    }]
}

export interface DestinationItemType {

        _id: string
        name: string
        english: string
        destinationCategory: {
            _id: string
            name: string
            english: string
        }
        additionalInfo: string
        image: string

}

export interface DestinationCategoryItemType {

        _id: string
        name: string
        english: string

    }


export interface DestinationCategories {
    result: [{
        _id: string
        name: string
        english: string
    }]
}

export interface DestinationCategoryItem {
    _id: string
    name: string
    english: string
}