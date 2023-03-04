const apiKey = '5VOS-aZsxtqwOMcWoIrvJag0aSBYyv25HVuDToeC3Ow8hdDy6tWo0-KThCqz0BjEt1SmgMf0ELRQMPwniB8M1Q5tP-xtiloJayes0M_NzRFae8kdxf6uYA09LMMCZHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse.businesses)
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.reviewCount,
                    }
                });
            }
        });
    }
};

export default Yelp;