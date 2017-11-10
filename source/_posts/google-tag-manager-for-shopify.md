---
title: google tag manager for shopify
description: How to implement google tag manager for shopify, and successfully deploy tags such as Google AdWords, Google Analytics to be able to run successful shopping campaigns.
date: 2017-06-29 11:35:25
tags: 
- tag manager
- shopify
banner: shopify-and-google-analytics.png
---

Shopify has been given a bit of flack locally to me as not being fit for purpose, and not being good as a shop, which is amusing, seen as the suggested route has been wordpress + wocommerce. As a developer it upsets me, and I was keen to push shopify, as other off the shelf systems are not the best in my opinion, woocommerce being wordpress, no more needs to be said. Magentio being so overly complexed, and about as easy to weild as a 20foot battle axe in a lift. Shopify has a proper separation of concerns when it comes to templating and implementing 3rd party add-ons, no servers to manage, no issues of increased traffic and having to handle the extra server load.

It's clear after setting it up and playing with themes I had chosen the right platform to back, with a slight issue of installing google tag manager correctly, as in being able to track someone right the way through the store, from ad campaign to purchase, as otherwise you can't measure the return on investment, or profitability of your marketing campaign, so pretty important to get right. 

Again I was faced with stories of it being impossible and not working, fools I thought, nothing is impossible! Rightly so it's bloody simple and easy and would probably take around 30 minutes to implement again.

Shopify offers you the option to use analytics out of the box with enhanced e-commerce tracking but this doesn't allow tag manager to be used in the right way. By turning enhanced e-commerce tracking off in shopify, but leaving analytics running, shopify handles all the tracing of users from your store - mystore.myshopify.com - onto the checkout - checkout.shopify.com through the use of anonymous ids and then back to the thank you/order-confirmation page.

We can then edit the main template to add in the tag manager code on each page (minus the checkout) probably best to just copy and paste from google to get your ID in the correct place. They do suggest a 2 part install with an iframe for no script. From what I can tell this seems pointless as without proper set up, which is very hard to find and not documented, the use of get params into the iFrame code, it won't work anyway.

```html

<!-- Google Tag Manager -->
<script>(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start': new Date().getTime(), event: 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-XXXXX');</script>
<!-- End Google Tag Manager -->
```

You are then able to add code into the checkout, where you have full liquid access to the order object. From admin -> settings -> Checkout. Find additional scripts at the end of 'order processing' section paste the contents in, adding you id in where nesscarry

```html
<script>
	dataLayer = [{
		'transactionId': '{{ checkout.id }}',
		'transactionTotal': {{ checkout.total_price | money_without_currency }},
		'transactionTax': {{ checkout.tax_price | money_without_currency }},
		'transactionShipping': {{ checkout.shipping_method.price | money_without_currency}},
		'transactionProducts': [
            {% for item in checkout.line_items %}
            {% if forloop.index > 1 %}, {% endif %}{
				'sku': '{{ item.sku }}',
				'name': '{{ item.title | handleize | replace: '-', ' ' }}',
				'price': {{ item.price | money_without_currency }},
				'quantity': {{ item.quantity }}
			}
            {% endfor %}]
	}];
</script>

<!-- Google Tag Manager -->
<script>(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start': new Date().getTime(), event: 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-XXXXX');</script>
<!-- End Google Tag Manager -->
```

From here you will need to set up a universal analytics transaction tag to be fired on the checkout confirmation page from within Tag Manager.

You will need to create a trigger for the confirmation page.

From within tag manager interface create a universal analytics transaction tag, and set this to fire on checkout confirmation page of your store. Now you should be all set up and ready to.

for full code is available on [github](https://github.com/kernowjoe/shopify-tagmanager) feel free to correct/enhance if you see any improvements ,make a pull request.