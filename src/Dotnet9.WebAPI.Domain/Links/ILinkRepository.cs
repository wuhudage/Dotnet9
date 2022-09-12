﻿namespace Dotnet9.WebAPI.Domain.Links;

public interface ILinkRepository
{
    Task<(Link[]? Links, long Count)> GetListAsync(string? keywords, int pageIndex, int pageSize);
    Task<int> DeleteAsync(Guid[] ids);
    Task<Link?> FindByIdAsync(Guid id);
    Task<Link?> FindByNameAsync(string name);
    Task<Link?> FindByUrlAsync(string url);
}