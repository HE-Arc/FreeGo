from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        """
        Check if user is admin or if request method is readonly
        """
        return bool(
            request.method in SAFE_METHODS or
            request.user.has_perm('fridge.admin')
        )


class ReadOnly(BasePermission):
    def has_permission(self, request, view): 
        """
        Check if request method is readonly
        """
        return request.method in SAFE_METHODS
