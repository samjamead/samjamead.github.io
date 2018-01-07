---
title:  "Recommendation: Send Transactional Email From Auth0 Using SendGrid"
date:   2016-08-28 16:00:31 +0800
permalink: /blog/sendgridtutorial
category: Tutorials
description: "Thank you Ryan Chenkie for making such an easy tutorial on sending email from Auth0 via SendGrid."
---
### I left it to the absolute last minute.

One month's worth of notice wasn't enough for me... So I left things till I had 12 hours!

We (Uproute) use Auth0 to authenticate our users. It's great! One less thing for us to worry about.

But. The email template settings within Auth0 were scheduled to change; we would now need to use a 3rd party email provider to send transactional email from Auth0 to our users.

Option 1 was Mandril but it seemed to be buried too far into Mailchimp to be easy to use. Plus for some reason I'm not all that keen on Mailchimp anyway.

Option 2 was Amazon SES but their website is ugly so that ruled them out.

Last option was SendGrid. Nice looking website. Not affiliated with Mailchimp. We have a winner!

No idea where to start though...

Fortunately, Ryan Chenkie from Auth0 had written a super easy tutorial on sending transactional email from Auth0 using SendGrid. It's here: [Modern Authentication And Identity - Where Are We Today?](https://sendgrid.com/blog/modern-authentication-and-identity-where-are-we-today/)

Easy! Turned out to be a 5 minute job. Thanks Ryan Chenkie.
