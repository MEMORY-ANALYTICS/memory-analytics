package school.sptech.Hardware;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;

import java.util.List;

public class DiscoLocal {
    private String nome;
    private String modelo;
    private String serial;
    private Long tamanho;
    private Long leituras;
    private Long bytesLeitura;
    private Long tamanhoFila;
    private Long tempoTransferencia;
    private List<Disco> listaDiscos;

    public DiscoLocal() {
        Looca looca = new Looca();
        this.listaDiscos = looca.getGrupoDeDiscos().getDiscos();
    }

    public void listarTodosDiscos(){
        for( Disco disco : listaDiscos){
            System.out.println(disco);
        }
    }
}
