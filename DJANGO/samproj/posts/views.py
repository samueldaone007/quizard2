from django.shortcuts import render, get_object_or_404
from .models import Post

def post_list(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'posts/post_list.html', {'posts': posts})
def post_page(request, title):
    post = get_object_or_404(Post, title = title)
    return render(request, 'posts/post_page.html', {'post':post})