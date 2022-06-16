from rest_framework import viewsets

from store.serializers import *
from store.models import *

class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer

class TypeViewSet(viewsets.ModelViewSet):
   queryset = Type.objects.all()
   serializer_class = TypeSerializer

class BrandViewSet(viewsets.ModelViewSet):
   queryset = Brand.objects.all()
   serializer_class = BrandSerializer

class DeviceViewSet(viewsets.ModelViewSet):
   queryset = Device.objects.all()
   serializer_class = DeviceSerializer

class BasketViewSet(viewsets.ModelViewSet):
   queryset = Basket.objects.all()
   serializer_class = BasketSerializer

class BasketItemViewSet(viewsets.ModelViewSet):
   queryset = BasketItem.objects.all()
   serializer_class = BasketItemSerializer

