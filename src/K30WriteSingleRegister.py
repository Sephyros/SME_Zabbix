#!/usr/bin/python
import sys

from pyModbusTCP.client import ModbusClient

c = ModbusClient(host="192.168.10.37", auto_open=True, auto_close=True)

def comando(parametro):
    if parametro == "-partir":
        if c.write_single_register(11009, 1):
          return "Executado"
        else:
          return "Deu ruim"
    elif parametro == "-parar":
        if c.write_single_register(11009, 2):
          return "Executado"
        else:
          return "Deu ruim"
    elif parametro == "-redeon":
        if c.write_single_register(11009, 3):
          return "Executado"
        else:
          return "Deu ruim"
    elif parametro == "-cargaoff":
        if c.write_single_register(11009, 4):
          return "Desligada Chave"
        else:
          return "Deu ruim"
    elif parametro == "-gmgon":
        if c.write_single_register(11009, 5):
          return "Carga GMG ligado"
        else:
          return "Deu ruim"
    elif parametro == "-rearme":
        if c.write_single_register(11009, 6):
          return "REARME ativado"
        else:
          return "Deu ruim"
    elif parametro == "-inibido":
        if c.write_single_register(11009, 7):
          return "Gerador em modo INIBIDO"
        else:
          return "Deu ruim"
    elif parametro == "-manual":
        if c.write_single_register(11009, 8):
          return "Gerador em modo MANUAL"
        else:
          return "Deu ruim"
    elif parametro == "-auto":
        if c.write_single_register(11009, 9):
          return "Gerador em modo AUTO"
        else:
          return "Deu ruim"
    elif parametro == "-teste":
        if c.write_single_register(11009, 0):
          return "Gerador em modo TESTE"
        else:
          return "Deu ruim"

comando(sys.argv[1])
