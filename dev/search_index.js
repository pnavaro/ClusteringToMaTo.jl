var documenterSearchIndex = {"docs":
[{"location":"demo2/#TDA-examples","page":"TDA datasets","title":"TDA examples","text":"","category":"section"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"using Plots\nusing DelimitedFiles\nusing ClusteringToMaTo\ngr(fmt = :png) # useful to plot a large size of scatter points\noptions = (ms=1, aspect_ratio=1, markerstrokewidth=0)","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"download(\"https://raw.githubusercontent.com/MathieuCarriere/sklearn-tda/master/example/inputs/spiral_w_o_density.txt\", \n\"spiral_w_o_density.txt\")\n\npoints = collect(transpose(readdlm(joinpath(\"spiral_w_o_density.txt\"))))","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"@time labels, intervals = data2clust(points, 2, 87, 87, 7.5*10.0^(-7))\n\nscatter(points[1, :], points[2, :], c = labels; options...)","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"download(\"https://raw.githubusercontent.com/MathieuCarriere/sklearn-tda/master/example/inputs/toy_example_w_o_density.txt\",\n\"toy_example_w_o_density.txt\") \ntoy = collect(transpose(readdlm(joinpath(\"toy_example_w_o_density.txt\"))))","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"@time labels, intervals = data2clust(toy, 2, 1.0, 100, 0.01)\n\nscatter(view(toy,1, :), view(toy,2,:), c = labels; options... )","category":"page"},{"location":"demo1/#FCPS-datasets-examples","page":"FCPS data","title":"FCPS datasets examples","text":"","category":"section"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"We use data from ","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"Ultsch, A.; Lötsch, J. The Fundamental Clustering and Projection Suite (FCPS): A Dataset Collection to Test the Performance of Clustering and Data Projection Algorithms. Data 2020, 5, 13. https://doi.org/10.3390/data5010013","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"using ClusteringToMaTo\nusing Plots\nusing DelimitedFiles\nimport Clustering\n\nfunction read_csv(filepath)\n    data, columns = readdlm(filepath, ',',  header=true)\n    return collect(data[:,2:end]'), Int.(data[:,1])\nend","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"TwoDiamonds.csv\"))\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = data2clust(points, 2, 0.25, 20, 0.25)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Lsun.csv\"))\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n1\n@time labels, intervals = data2clust(points, 1, 10, 5, 0.6)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Atom.csv\"))\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], points[3, :], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = data2clust(points, 2, 15, 10, 0.0000515)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], points[3, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Chainlink.csv\"))\n\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], points[3, :], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = data2clust(points, 1, 10, 100, 0.2)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], points[3, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Engytime.csv\"))\n\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = data2clust(points, 2, 1, 10, 0.00000001)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"#ClusteringToMaTo.jl","page":"Home","title":"ClusteringToMaTo.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ClusteringToMaTo.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ClusteringToMaTo]\nOrder   = [:type, :function]","category":"page"},{"location":"#ClusteringToMaTo.data2clust-Tuple{Matrix{Float64}, Vararg{Any, 4}}","page":"Home","title":"ClusteringToMaTo.data2clust","text":"data2clust(points, graph, k, q, τ)\n\nk : number of nearest neighbors to create the graph\nq : regularity parameter for the approximation of the density function\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMaTo.density_function-Tuple{Vector{Vector{Float64}}, Int64, Int64}","page":"Home","title":"ClusteringToMaTo.density_function","text":"density_function( dists, d, q)\n\ndensity function approximation\n\nq regularity parameter\n\n\n\n\n\n","category":"method"},{"location":"#First-example","page":"Home","title":"First example","text":"","category":"section"}]
}
