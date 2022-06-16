from rest_framework import serializers

from store.models import *

class UserSerializer(serializers.ModelSerializer):
   class Meta:
       model = User
       fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
   class Meta:
       model = Type
       fields = fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
   class Meta:
       model = Brand
       fields = fields = '__all__'

class DeviceSerializer(serializers.ModelSerializer):
   class Meta:
       model = Device
       fields = fields = '__all__'

class BasketSerializer(serializers.ModelSerializer):
   class Meta:
       model = Basket
       fields = fields = '__all__'

class BasketItemSerializer(serializers.ModelSerializer):
   class Meta:
       model = BasketItem
       fields = fields = '__all__'