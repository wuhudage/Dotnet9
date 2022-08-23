using Dotnet9.Core.FileHelpers;

namespace Dotnet9.Core.Test.FileHelpers;

public class UnitTest1
{
    [Fact]
    public void ReadMarkdownSuccess()
    {
        var testMarkdownFilePath = "F:\\github_gitee\\Assets.Dotnet9\\2019\\11\\Uses-fluent-validation-in-WPF.md";
        Assert.True(File.Exists(testMarkdownFilePath));
        var readPostFromMarkdownFile = MarkdownHelper.Read(testMarkdownFilePath);

        Assert.True(readPostFromMarkdownFile.Content?.Length > 0);
    }

    [Fact]
    public void WriteMarkdownSuccess()
    {
        var testMarkdownFilePath = "F:\\test.md";
        if (File.Exists(testMarkdownFilePath))
        {
            File.Delete(testMarkdownFilePath);
        }

        Assert.False(File.Exists(testMarkdownFilePath));

        var markdownInfo = new PostOfMarkdown();

        MarkdownHelper.Write(testMarkdownFilePath, markdownInfo);

        Assert.True(File.Exists(testMarkdownFilePath));
    }
}