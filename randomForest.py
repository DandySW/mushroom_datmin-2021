import eel
from numpy.core.fromnumeric import size
import pandas as pd
import numpy as np
# import matplotlib.pyplot as plt
# from sklearn import tree
from sklearn.model_selection import train_test_split
# from sklearn.metrics import confusion_matrix, accuracy_score
from sklearn.ensemble import RandomForestClassifier

eel.init('web')

df = pd.read_csv('mushrooms.csv')
for index in df[df.stalk_root == '?'].index:
    df.drop(index, inplace=True)
df.index = np.arange(1, len(df)+1)
dicti = {
    'class': {'e': 'edible', 'p': 'poisonous'},
    'cap_shape': {'b': 0, 'c': 1, 'x': 2, 'f': 3, 'k': 4, 's': 5},
    'cap_surface': {'f': 0, 'g': 1, 'y': 2, 's': 3},
    'cap_color': {'n': 0, 'b': 1, 'c': 2, 'g': 3, 'r': 4, 'p': 5, 'u': 6, 'e': 7, 'w': 8, 'y': 9},
    'bruises': {'t': 0, 'f': 1},
    'odor': {'a': 0, 'l': 1, 'c': 2, 'y': 3, 'f': 4, 'm': 5, 'n': 6, 'p': 7, 's': 8},
    'gill_attachment': {'a': 0, 'd': 1, 'f': 2, 'n': 3},
    'gill_spacing': {'c': 0, 'w': 1, 'd': 2},
    'gill_size': {'b': 0, 'n': 1},
    'gill_color': {'k': 0, 'n': 1, 'b': 2, 'h': 3, 'g': 4, 'r': 5, 'o': 6, 'p': 7, 'u': 8, 'e': 9, 'w': 10, 'y': 11},
    'stalk_shape': {'e': 0, 't': 1},
    'stalk_root': {'b': 0, 'c': 1, 'u': 2, 'e': 3, 'z': 4, 'r': 5},
    'stalk_surface_above_ring': {'f': 0, 'y': 1, 'k': 2, 's': 3},
    'stalk_surface_below_ring': {'f': 0, 'y': 1, 'k': 2, 's': 3},
    'stalk_color_above_ring': {'n': 0, 'b': 1, 'c': 2, 'g': 3, 'o': 4, 'p': 5, 'e': 6, 'w': 7, 'y': 8},
    'stalk_color_below_ring': {'n': 0, 'b': 1, 'c': 2, 'g': 3, 'o': 4, 'p': 5, 'e': 6, 'w': 7, 'y': 8},
    'veil_type': {'p': 0, 'u': 1},
    'veil_color': {'n': 0, 'o': 1, 'w': 2, 'y': 3},
    'ring_number': {'n': 0, 'o': 1, 't': 2},
    'ring_type': {'c': 0, 'e': 1, 'f': 2, 'l': 3, 'n': 4, 'p': 5, 's': 6, 'z': 7},
    'spore_print_color': {'k': 0, 'n': 1, 'b': 2, 'h': 3, 'r': 4, 'o': 5, 'u': 6, 'w': 7, 'y': 8},
    'population': {'a': 0, 'c': 1, 'n': 2, 's': 3, 'v': 4, 'y': 5},
    'habitat': {'g': 0, 'l': 1, 'm': 2, 'p': 3, 'u': 4, 'w': 5, 'd': 6}
}
df_copy = df.replace(dicti)


@eel.expose
def randomForest(data):
    X = df_copy.drop('class', axis='columns')
    Y = df_copy['class']
    X_train, X_test, Y_train, Y_test = train_test_split(
        X, Y, test_size=0.3, random_state=30)
    rf = RandomForestClassifier(n_estimators=101, criterion='entropy')
    rf.fit(X_train, Y_train)
    Y_pred = rf.predict(data)


eel.start('index.html', size=(1000, 600))
