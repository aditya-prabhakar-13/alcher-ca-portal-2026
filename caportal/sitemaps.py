from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.6

    def items(self):
        return [
            'dashboard_page', 'register_single', 'register_group', 'login', 'profile', 'scoring',
            'guidelines', 'successfull', # Add all named URLs you want indexed
            # add more if needed
        ]

    def location(self, item):
        return reverse(item)
