#!/usr/bin/python
import sys
import socket

# install the last available release (stable)
# sudo pip install pyModbusTCP
from pyModbusTCP.client import ModbusClient

hostipv4 = "127.0.0.1"

def run():
    try:
      checkForServerAvailability()
    except ConnectionError as error:
      print(error)
    else:
      print(writeSingleCoil(sys.argv[1]))

def checkForServerAvailability():
  sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  result = sock.connect_ex((hostipv4, 502))
  if not result:
    return 'Host online!'
  else:
    raise ConnectionError('O servidor não está respondendo')
  sock.close()

def writeSingleCoil(parametro):
    c = ModbusClient(host=hostipv4, auto_open=True, auto_close=True)
    if parametro == "-partir":
        if c.write_single_register(11009, 1):
          return "Gerador ligado."
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-parar":
        if c.write_single_register(11009, 2):
          return "Gerador parado"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-redeon":
        if c.write_single_register(11009, 3):
          return "Rede ligada"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-cargaoff":
        if c.write_single_register(11009, 4):
          return "Desligada Chave"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-gmgon":
        if c.write_single_register(11009, 5):
          return "Carga GMG ligado"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-rearme":
        if c.write_single_register(11009, 6):
          return "REARME ativado"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-inibido":
        if c.write_single_register(11009, 7):
          return "Gerador em modo INIBIDO"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-manual":
        if c.write_single_register(11009, 8):
          return "Gerador em modo MANUAL"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-auto":
        if c.write_single_register(11009, 9):
          return "Gerador em modo AUTO"
        else:
          return "Falha ao tentar escrevrer no registro."
    elif parametro == "-teste":
        if c.write_single_register(11009, 0):
          return "Gerador em modo TESTE"
        else:
          return "Falha ao tentar escrevrer no registro."

run()