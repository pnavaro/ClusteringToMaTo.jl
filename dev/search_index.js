var documenterSearchIndex = {"docs":
[{"location":"demo2/#TDA-examples","page":"TDA datasets","title":"TDA examples","text":"","category":"section"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"using Plots\nusing DelimitedFiles\nusing ClusteringToMATo\ngr(fmt = :png) # useful to plot a large size of scatter points\noptions = (ms=1, aspect_ratio=1, markerstrokewidth=0)","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"download(\"https://raw.githubusercontent.com/MathieuCarriere/sklearn-tda/master/example/inputs/spiral_w_o_density.txt\", \n\"spiral_w_o_density.txt\")\n\npoints = collect(transpose(readdlm(joinpath(\"spiral_w_o_density.txt\"))))","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"@time labels, intervals = tomato(points, 2, 87, 87, 7.5*10.0^(-7))\n\nscatter(points[1, :], points[2, :], c = labels; options...)","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"download(\"https://raw.githubusercontent.com/MathieuCarriere/sklearn-tda/master/example/inputs/toy_example_w_o_density.txt\",\n\"toy_example_w_o_density.txt\") \ntoy = collect(transpose(readdlm(joinpath(\"toy_example_w_o_density.txt\"))))","category":"page"},{"location":"demo2/","page":"TDA datasets","title":"TDA datasets","text":"@time labels, intervals = tomato(toy, 2, 1.0, 100, 0.01)\n\nscatter(view(toy,1, :), view(toy,2,:), c = labels; options... )","category":"page"},{"location":"demo1/#FCPS-datasets-examples","page":"FCPS data","title":"FCPS datasets examples","text":"","category":"section"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"We use data from ","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"Ultsch, A.; Lötsch, J. The Fundamental Clustering and Projection Suite (FCPS): A Dataset Collection to Test the Performance of Clustering and Data Projection Algorithms. Data 2020, 5, 13. https://doi.org/10.3390/data5010013","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"using ClusteringToMATo\nusing Plots\nusing DelimitedFiles\nimport Clustering\n\nfunction read_csv(filepath)\n    data, columns = readdlm(filepath, ',',  header=true)\n    return collect(data[:,2:end]'), Int.(data[:,1])\nend","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"TwoDiamonds.csv\"))\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = tomato(points, 2, 0.25, 20, 0.25)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Lsun.csv\"))\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n1\n@time labels, intervals = tomato(points, 1, 10, 5, 0.6)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Atom.csv\"))\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], points[3, :], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = tomato(points, 2, 15, 10, 0.0000515)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], points[3, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"Chainlink.csv\"))\n\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], points[3, :], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = tomato(points, 1, 10, 100, 0.2)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], points[3, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"demo1/","page":"FCPS data","title":"FCPS data","text":"points, true_labels = read_csv(joinpath(\"data\", \"EngyTime.csv\"))\n\np = plot(layout=(1,2))\nscatter!(p[1,1], points[1,:], points[2,:], c = true_labels, \nms=3, aspect_ratio=:equal, markerstrokewidth=0,label=\"\")\n\n@time labels, intervals = tomato(points, 2, 1, 10, 0.00000001)\nprintln(\" NMI = $(Clustering.mutualinfo(true_labels, labels))\")\nscatter!(p[1,2], points[1,:], points[2, :], c = labels, \n      label=\"\", ms=3, markerstrokewidth=0, aspect_ratio=1)","category":"page"},{"location":"#ClusteringToMATo.jl","page":"Home","title":"ClusteringToMATo.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ClusteringToMATo.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ClusteringToMATo]\nOrder   = [:type, :function]","category":"page"},{"location":"#ClusteringToMATo.BallDensity-Tuple{Any}","page":"Home","title":"ClusteringToMATo.BallDensity","text":"BallDensity(δ)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.compute_density-Tuple{ClusteringToMATo.DTM, Any}","page":"Home","title":"ClusteringToMATo.compute_density","text":"compute_density(df, points)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.compute_density-Tuple{ClusteringToMATo.DensityKNN, Any}","page":"Home","title":"ClusteringToMATo.compute_density","text":"compute_density(df, points)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.compute_density-Tuple{ClusteringToMATo.GaussianCutoff, Any}","page":"Home","title":"ClusteringToMATo.compute_density","text":"compute_density(df, points)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.compute_density-Tuple{ClusteringToMATo.GaussianNN, Any}","page":"Home","title":"ClusteringToMATo.compute_density","text":"compute_density(df, points)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.compute_persistence-NTuple{4, Any}","page":"Home","title":"ClusteringToMATo.compute_persistence","text":"compute_persistence(points, f, graph, τ)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.tomato-Tuple{Matrix{Float64}, Vararg{Any, 4}}","page":"Home","title":"ClusteringToMATo.tomato","text":"tomato(points, graph, k, q, τ)\n\n\nk : number of nearest neighbors to create the graph\nq : regularity parameter for the approximation of the density function\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.tomato-Tuple{Matrix{Float64}, Vector{Float64}, Any, Any}","page":"Home","title":"ClusteringToMATo.tomato","text":"tomato(points, f, δ, τ)\n\n\n\n\n\n\n","category":"method"},{"location":"#ClusteringToMATo.tomato-Tuple{Matrix{Float64}}","page":"Home","title":"ClusteringToMATo.tomato","text":"tomato(points; graph, k, q, τ)\n\n\npoints is a matrix of size nd × np where nd is the dimensionality and np is the number of points\n\n\n\n\n\n","category":"method"},{"location":"#First-example","page":"Home","title":"First example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Create some data","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ClusteringToMATo\nusing Plots\n\nfunction noisy_circle(n; r1=1, r2=1, noise=0.1)\n    points = zeros(2, n)\n    for i in 1:n\n        θ = 2π * rand()\n        point = (\n            r1 * sin(θ) + noise * rand() - noise / 2,\n            r2 * cos(θ) + noise * rand() - noise / 2,\n        )\n        points[:,i] .= point\n    end\n    return points\nend\n\npoints = hcat(noisy_circle(500), noisy_circle(500, r1=0.5, r2=0.5))\nscatter(points[1,:], points[2,:], aspect_ratio=1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Compute density approximation and plot","category":"page"},{"location":"","page":"Home","title":"Home","text":"import ClusteringToMATo: BallGraph, compute_graph, compute_density, DTM\ngraph = compute_graph(BallGraph(0.1), points)\nf = compute_density(DTM(5), points)\nscatter(points[1,:], points[2,:], marker_z = f, aspect_ratio=1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"import ClusteringToMATo: compute_persistence\n\nlabels, intervals = compute_persistence(points, f, graph, Inf)\n\nplot(intervals, τ = 120)","category":"page"},{"location":"","page":"Home","title":"Home","text":"labels, intervals = compute_persistence(points, f, graph, 120)\nscatter(points[1,:], points[2,:], c = labels, aspect_ratio=1)","category":"page"},{"location":"#Parameter-selection","page":"Home","title":"Parameter selection","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ToMATo takes in three inputs: the neighborhood graph G, the density estimator f, and the merging parameter τ. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Neighborhood graph G. ToMATo relies on the neighborhood information encoded in the input graph G. Two options are available:\nconnects two data points when they lie within distance δ of each other.  Different choices of delta may reveal different structures. This is why we recommend running ToMATo at several scales. For too large values of δ there will be no real structure in the persistence diagram, while too small values will produce too many infinitely prominent peaks in the persistence diagram, corresponding to the connected components of the graph.\nk-nearest neighbor graph. You get correct clusters under a suitable  choice of parameter k accomplished by trial-and-error.\nDensity estimator f. Several are available: truncated Gaussian kernel  estimator, and the distance to a measure. Each of these estimators uses  one or two parameters.\nMerging parameter τ. It determines which peaks of f are considered significant.  To choose τ, call the function with τ set to Inf, and plot the persistence diagram. It reveals the topological structure of f, providing the height  and prominence of each peak of f. In cases where the persistence diagram of f shows a large gap  separating a small set of k highly prominent peaks from the rest of the  structure, we infer that the number of clusters is likely to be k,  and so you can set τ to be any value between the prominences of the k  distinguished peaks and the prominences of the rest of the persistence diagram.  By default, we try to detect the gap automatically. we sort the points  in the persistence diagram by decreasing prominence, and then we look for the largest drop  in the sequence of prominences.","category":"page"}]
}
