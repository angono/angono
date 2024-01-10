const projectsData = [
	{
		category: "Web App",
		title: "Evangelistsite",
		description: "Evangelistsite is a Christian website where you can connect with other believers, share your faith, and learn more about God. Evangelistsite allows you to post content in the form of:\n1. Text\n2. YouTube or Facebook video URLs\n3. Image URLs in formats such as PNG, JPG, JPEG, GIF, etc.",
		url_link: "https://evangelistsite.com"
	},
	{
		category: "Desktop App",
		title: "GitHub Repo: Hotel Management System Desktop Application",
		description: "Simple Hotel Management System Desktop Application developed in Python using Tkinter library.",
		url_link: "https://github.com/angono/shalele-desktop"
	},
	{
		category: "Mobile App",
		title: "Universe Application",
		description: "Welcome to Universe, your go-to destination for celestial exploration! We're a passionate team of space enthusiasts dedicated to bringing the wonders of the cosmos to your fingertips. What Sets Us Apart: Comprehensive Info: Dive into rich details about stars, planets, moons, and galaxies. Stunning Visuals: Immerse yourself in breathtaking images of the cosmos, from distant planets to mesmerizing nebulae. Stay Informed: Discover the latest space missions, scientific breakthroughs, and celestial events. Why Universe: Universe is your portal to the infinite. Join us in unraveling the mysteries and marvels of the universe. Ready for a cosmic journey? Explore Universe today!",
		url_link: "https://play.google.com/store/apps/details?id=com.derkos.universe"
	},
	{
		category: "Mobile App",
		title: "Kilimo Soft Application",
		description: "Welcome to Kilimo Soft, your go-to app for all things agriculture and livestock rearing. Our mission is to provide farmers and animal breeders with the information, tools, and resources they need to raise healthy animals, grow better crops, and run successful farm businesses. At Kilimo Soft, we believe that farming should be made easy through smart solutions and sustainable practices. That's why we offer a range of interactive tools, such as calculators and planners, to help you make informed decisions about crop cultivation, livestock management, and farm planning. Our app covers a wide range of topics, from troubleshooting solutions for common farming challenges to sustainable farming practices that promote soil health, water conservation, biodiversity, and ecosystem services. We also provide guidance on farm equipment and machinery selection, operation, maintenance, and safety considerations. At Kilimo Soft, we're dedicated to helping you farm smarter, not harder. Whether you're a seasoned farmer or just starting out, our app has something for everyone. Thank you for choosing Kilimo Soft as your farming companion.",
		url_link: "https://play.google.com/store/apps/details?id=com.derkos.kilimosoft"
	},
	{
		category: "Web App",
		title: "GitHub Repo: API Movies App in React JS",
		description: "Simple movies application rest API with React JS for beginner.",
		url_link: "https://github.com/angono/react-api-app"
	},
	{
		category: "Mobile App",
		title: "Basic English Sango Language",
		description: "Easily learn Sango / Sangho with this app. It has many words, sentences, and examples. You can improve quickly with everything you need to know in Sango. It works offline, is simple to use, and includes English to Sango translations. You'll learn the Sango alphabet, pronunciation, greetings, introductions, feelings, family, drinks, foods, places, directions, costs, colors, times of the day, days and months, numbers, personal pronouns, climate, questions, and useful words and phrases.",
		url_link: "https://play.google.com/store/apps/details?id=com.derkos.english_sango"
	},
	{
		category: "Web App",
		title: "Simple Real Estate Website",
		description: "Real Estate: Where Imagination Meets Possibility, Where Dreams Take Shape, and Where Homes, Apartments, and Investment Properties Are Crafted with Care and Expertise, Providing Endless Opportunities for Ownership, Rental, and Financial Growth.",
		url_link: "https://angohouse.com/"
	},
];


// Create an array of HTML templates for each item
const htmlTemplates = projectsData.map(item => `
<ul class="list-group list-group-flush">
	<li class="list-group-item list-group-item-action py-3">
		<a target="_blank" href="${item.url_link}" class="text-reset text-decoration-none">
	        <h4 class="text-capitalize">${item.title}</h4>
	        <p class="text-success fw-bold text-capitalize">${item.category}</p>
	        <p>${item.description}</p>
	        <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-success">VIEW</button>
            </div>
	    </a>
	</li>
</ul>
`);

// Join the array of templates into a single string
const combinedHtml = htmlTemplates.join('');

// Assuming you have a container element with the id "app"
document.getElementById("app").innerHTML = combinedHtml;



