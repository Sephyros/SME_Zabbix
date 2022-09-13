#!/usr/bin/python
import sys

from pyModbusTCP.client import ModbusClient

c = ModbusClient(host="192.168.10.37", auto_open=True, auto_close=True)

def comando(parametro):
    if parametro == "-partir":
        if c.write_single_register(11009, 1):
          return "Executado"
        else:
          return "Falha no comando."
    elif parametro == "-parar":
        if c.write_single_register(11009, 2):
          return "Executado"
        else:
          return "Falha no comando."
    elif parametro == "-redeon":
        if c.write_single_register(11009, 3):
          return "Executado"
        else:
          return "Falha no comando."
    elif parametro == "-cargaoff":
        if c.write_single_register(11009, 4):
          return "Desligada Chave"
        else:
          return "Falha no comando."
    elif parametro == "-gmgon":
        if c.write_single_register(11009, 5):
          return "Carga GMG ligado"
        else:
          return "Falha no comando."
    elif parametro == "-rearme":
        if c.write_single_register(11009, 6):
          return "REARME ativado"
        else:
          return "Falha no comando."
    elif parametro == "-inibido":
        if c.write_single_register(11009, 7):
          return "Gerador em modo INIBIDO"
        else:
          return "Falha no comando."
    elif parametro == "-manual":
        if c.write_single_register(11009, 8):
          return "Gerador em modo MANUAL"
        else:
          return "Falha no comando."
    elif parametro == "-auto":
        if c.write_single_register(11009, 9):
          return "Gerador em modo AUTO"
        else:
          return "Falha no comando."
    elif parametro == "-teste":
        if c.write_single_register(11009, 0):
          return "Gerador em modo TESTE"
        else:
          return "Falha no comando."

comando(sys.argv[1])
