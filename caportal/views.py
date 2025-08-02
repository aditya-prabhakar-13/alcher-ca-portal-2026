from django.shortcuts import render


def error_404(request, exception):
    return render(request, "errors/404.html", status=404)


def error_500(request, exception=None):
    return render(request, "errors/404.html", status=500)

def new_page_1_view(request):
    return render(request, 'newpage1.html')
