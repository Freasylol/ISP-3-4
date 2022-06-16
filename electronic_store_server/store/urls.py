from django.urls import include, path

from rest_framework import routers

from store.views import *

router = routers.DefaultRouter()
router.register(r'user', UserViewSet)
router.register(r'type', TypeViewSet)
router.register(r'brand', BrandViewSet)
router.register(r'device', DeviceViewSet)
router.register(r'basket', BasketViewSet)
router.register(r'basketItem', BasketItemViewSet)

urlpatterns = [
   path('', include(router.urls)),
]